module.exports = {

"[project]/app/graphql/resolvers.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const resolvers = {
    Query: {
        hello: ()=>"Hello world!"
    }
};
const __TURBOPACK__default__export__ = resolvers;

})()),
"[project]/app/graphql/schemas.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/graphql-tag/lib/index.js [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const typeDefs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["gql"]`
  type Query {
    hello: String
  }
`;
const __TURBOPACK__default__export__ = typeDefs;

})()),
"[project]/app/api/graphql/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$as$2d$integrations$2f$next$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@as-integrations/next/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$server$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@apollo/server/dist/esm/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$server$2f$dist$2f$esm$2f$ApolloServer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@apollo/server/dist/esm/ApolloServer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$graphql$2f$resolvers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/graphql/resolvers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$graphql$2f$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/graphql/schemas.ts [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const server = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$server$2f$dist$2f$esm$2f$ApolloServer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ApolloServer"]({
    typeDefs: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$graphql$2f$schemas$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    resolvers: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$graphql$2f$resolvers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
});
// Typescript: req has the type NextRequest
const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$as$2d$integrations$2f$next$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startServerAndCreateNextHandler"])(server, {
    context: async (req)=>({
            req
        })
});
async function GET(req, res) {
    const { searchParams } = new URL(req.url);
    return handler(req);
} // export async function POST(request: NextRequest) {
 //   return handler(request);
 // }

})()),

};

//# sourceMappingURL=app_1e4957._.js.map