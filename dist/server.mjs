import {
  registerForEvent
} from "./chunk-5KK2OEKH.mjs";
import {
  errorHandler
} from "./chunk-GTDQXZEK.mjs";
import {
  checkIn
} from "./chunk-7XYL3H2W.mjs";
import {
  createEvent
} from "./chunk-HBWC5XXL.mjs";
import "./chunk-QYYYH4AJ.mjs";
import {
  getAttendeeBadge
} from "./chunk-6OIJHSGT.mjs";
import {
  getEventAttendees
} from "./chunk-WNGBL4SU.mjs";
import {
  getEvent
} from "./chunk-VJCSX6RK.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass-in",
      description: "Especifica\xE7\xE3o da Api para o back-end da aplica\xE7\xE3o passs.in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({
  port: 3333,
  host: "0.0.0.0"
}).then(() => {
  console.log("http server running");
});
export {
  app
};
