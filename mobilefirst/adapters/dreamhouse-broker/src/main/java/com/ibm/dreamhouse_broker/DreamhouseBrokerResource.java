/*
 *    Licensed Materials - Property of IBM
 *    5725-I43 (C) Copyright IBM Corp. 2015, 2016. All Rights Reserved.
 *    US Government Users Restricted Rights - Use, duplication or
 *    disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

package com.ibm.dreamhouse_broker;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import java.util.logging.Logger;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.wink.json4j.utils.XML;
import org.xml.sax.SAXException;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import java.io.IOException;
import java.nio.charset.Charset;
import com.ibm.mfp.adapter.api.ConfigurationAPI;
import com.ibm.mfp.adapter.api.OAuthSecurity;
import com.ibm.json.java.JSONObject;
import com.ibm.json.java.JSONArray;

@Api(value = "Sample Adapter Resource")
@Path("/resource")
public class DreamhouseBrokerResource {
	/*
	 * For more info on JAX-RS see
	 * https://jax-rs-spec.java.net/nonav/2.0-rev-a/apidocs/index.html
	 */

	// Define logger (Standard java.util.Logger)
	static Logger logger = Logger.getLogger(DreamhouseBrokerResource.class.getName());

	// Inject the MFP configuration API:
	@Context
	ConfigurationAPI configApi;

	private static CloseableHttpClient client;
	private static HttpHost host;

	public static void init() {
		client = HttpClientBuilder.create().build();
		// https://dream-house-mock-service.mybluemix.net/
		host = new HttpHost("dream-house-mock-service.mybluemix.net", 443, "https");
	}

	public void execute(HttpUriRequest req, String id, HttpServletResponse resultResponse)
			throws IOException,
			IllegalStateException, SAXException {
		
		JSONObject resultObject = null;
		JSONArray resultArray = null;
		String json = null;
		
		HttpResponse JSONResponse = client.execute(host, req);
		ServletOutputStream os = resultResponse.getOutputStream();
		
		if (JSONResponse.getStatusLine().getStatusCode() == HttpStatus.SC_OK){
			resultResponse.addHeader("Content-Type", "application/json");
			if(id!=null && !id.isEmpty()) {
				resultObject = JSONObject.parse(JSONResponse.getEntity().getContent());
				json = resultObject.toString();
			} else {
				resultArray = JSONArray.parse(JSONResponse.getEntity().getContent());
				json = resultArray.serialize();
			}
			os.write(json.getBytes(Charset.forName("UTF-8")));
			JSONResponse.getEntity().getContent().close(); // MUST !!!
		} else {
			resultResponse.setStatus(JSONResponse.getStatusLine().getStatusCode());
			JSONResponse.getEntity().getContent().close(); // MUST !!!
			os.write(JSONResponse.getStatusLine().getReasonPhrase().getBytes());
		}
		os.flush();
		os.close();
	}

	@GET
	@Produces("application/json")
	public void get(@Context HttpServletResponse response, @QueryParam("id") String id)
			throws IOException, IllegalStateException, SAXException {
		if(id!=null && !id.isEmpty()){
			execute(new HttpGet("/brokers/"+ id), id, response);
		}
		else{
			execute(new HttpGet("/brokers"), id, response);
		}

	}

	/*
	 * Path for method:
	 * "<server address>/mfp/api/adapters/dreamhouseBroker/resource"
	 

	@ApiOperation(value = "Returns 'Hello from resource'", notes = "A basic example of a resource returning a constant string.")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Hello message returned") })
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getResourceData() {
		// log message to server log
		logger.info("Logging info message...");

		return "Hello from resource";
	}
	*/

	/*
	 * Path for method:
	 * "<server address>/mfp/api/adapters/dreamhouseBroker/resource/greet?name={name}"
	 

	@ApiOperation(value = "Query Parameter Example", notes = "Example of passing query parameters to a resource. Returns a greeting containing the name that was passed in the query parameter.")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Greeting message returned") })
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	@Path("/greet")
	public String helloUser(
			@ApiParam(value = "Name of the person to greet", required = true) @QueryParam("name") String name) {
		return "Hello " + name + "!";
	}
	*/

	/*
	 * Path for method:
	 * "<server address>/mfp/api/adapters/dreamhouseBroker/resource/{path}/"
	 

	@ApiOperation(value = "Multiple Parameter Types Example", notes = "Example of passing parameters using 3 different methods: path parameters, headers, and form parameters. A JSON object containing all the received parameters is returned.")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "A JSON object containing all the received parameters returned.") })
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{path}")
	public Map<String, String> enterInfo(
			@ApiParam(value = "The value to be passed as a path parameter", required = true) @PathParam("path") String path,
			@ApiParam(value = "The value to be passed as a header", required = true) @HeaderParam("Header") String header,
			@ApiParam(value = "The value to be passed as a form parameter", required = true) @FormParam("form") String form) {
		Map<String, String> result = new HashMap<String, String>();

		result.put("path", path);
		result.put("header", header);
		result.put("form", form);

		return result;
	}
	*/

	/*
	 * Path for method:
	 * "<server address>/mfp/api/adapters/dreamhouseBroker/resource/prop"
	 

	@ApiOperation(value = "Configuration Example", notes = "Example usage of the configuration API. A property name is read from the query parameter, and the value corresponding to that property name is returned.")
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "Property value returned."),
			@ApiResponse(code = 404, message = "Property value not found.") })
	@GET
	@Path("/prop")
	@Produces(MediaType.TEXT_PLAIN)
	public Response getPropertyValue(
			@ApiParam(value = "The name of the property to lookup", required = true) @QueryParam("propertyName") String propertyName) {
		// Get the value of the property:
		String value = configApi.getPropertyValue(propertyName);
		if (value != null) {
			// return the value:
			return Response
					.ok("The value of " + propertyName + " is: " + value)
					.build();
		} else {
			return Response.status(Status.NOT_FOUND)
					.entity("No value for " + propertyName + ".").build();
		}

	}
	*/

	/*
	 * Path for method:
	 * "<server address>/mfp/api/adapters/dreamhouseBroker/resource/unprotected"
	 

	@ApiOperation(value = "Unprotected Resource", notes = "Example of an unprotected resource, this resource is accessible without a valid token.")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "A constant string is returned") })
	@GET
	@Path("/unprotected")
	@Produces(MediaType.TEXT_PLAIN)
	@OAuthSecurity(enabled = false)
	public String unprotected() {
		return "Hello from unprotected resource!";
	}
	*/

	/*
	 * Path for method:
	 * "<server address>/mfp/api/adapters/dreamhouseBroker/resource/protected"
	 

	@ApiOperation(value = "Custom Scope Protection", notes = "Example of a resource that is protected by a custom scope. To access this resource a valid token for the scope 'myCustomScope' must be acquired.")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "A constant string is returned") })
	@GET
	@Path("/protected")
	@Produces(MediaType.TEXT_PLAIN)
	@OAuthSecurity(scope = "myCustomScope")
	public String customScopeProtected() {
		return "Hello from a resource protected by a custom scope!";
	}
	*/
}
