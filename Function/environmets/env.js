function getEnvironment(env) {
    const environments = {
        QA:   "https://qa.example.com",
        PROD: "https://prod.example.com",
        ACCP: "https://accp.example.com",
        UAT:  "https://uat.example.com"
    };

    return environments[env] || "Invalid environment";
}

console.log(getEnvironment("QA"));   // Live QA URL
console.log(getEnvironment("PROD")); // Live PROD URL
