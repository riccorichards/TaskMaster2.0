const BackEnd = {
  name: "Advanve_Backend",
  children: [
    {
      name: "Step 1",
      children: [
        {
          name: "Specific needs",
        },
        {
          name: "Web Security",
          children: [
            {
              name: "theory",
              children: [
                { name: "MD5 and why not to use it" },
                { name: "SHA Family" },
                { name: "scrypt" },
                { name: "bcrypt" },
                { name: "HTTPS" },
                { name: "OWASP Risks" },
                { name: "CORS" },
                { name: "SSL/TLS" },
                { name: "CSP" },
                { name: "Server Security" },
              ],
            },
          ],
        },
        {
          name: "APIs best practice",
          children: [
            {
              name: "theory",
              children: [
                { name: "Authentication" },
                { name: "JWT" },
                { name: "Access Control" },
                { name: "OAuth" },
                { name: "Input" },
                { name: "Processing" },
                { name: "outPut" },
                { name: "CI & CD" },
                { name: "Monitoring" },
              ],
            },
          ],
        },
        {
          name: "Unit Testing",
          children: [
            {
              name: "theory",
            },
            {
              name: "practice",
            },
          ],
        },
        {
          name: "Authentication",
          children: [
            {
              name: "OAuth",
            },
            {
              name: "practice",
            },
          ],
        },
        {
          name: "scaling DBs",
          children: [
            {
              name: "DB Indexes",
            },
            {
              name: "practice",
            },
          ],
        },
        {
          name: "Docker",
          children: [
            {
              name: "theory",
            },
            {
              name: "practice",
            },
          ],
        },
        {
          name: "advance DBs",
          children: [
            {
              name: "theory",
              children: [
                { name: "ORMs" },
                { name: "ACID" },
                { name: "Transactions" },
                { name: "N+1 Problem" },
                { name: "Normalization" },
                { name: "Failure Modes" },
                { name: "Profiling Prefor." },
              ],
            },
            {
              name: "practice",
            },
          ],
        },
        {
          name: "Redis",
          children: [
            {
              name: "theory",
            },
            {
              name: "practice",
            },
          ],
        },
        {
          name: "MySQL",
          children: [
            {
              name: "practice",
              children: [
                { name: "Social" },
                { name: "Movies" },
                { name: "Dashboard" },
                { name: "E-commerce" },
                { name: "Booking" },
              ],
            },
          ],
        },
        {
          name: "MongoDB",
          children: [
            {
              name: "practice",
              children: [
                { name: "Social" },
                { name: "Movies" },
                { name: "Dashboard" },
                { name: "E-commerce" },
                { name: "Booking" },
              ],
            },
          ],
        },
        {
          name: "PostgreSQL",
          children: [
            {
              name: "theory",
            },
            {
              name: "practice",
              children: [
                { name: "Social" },
                { name: "Movies" },
                { name: "Dashboard" },
                { name: "E-commerce" },
                { name: "Booking" },
              ],
            },
          ],
        },
        {
          name: "CI/CD",
          children: [
            {
              name: "theory",
            },
            {
              name: "practice",
            },
          ],
        },
      ],
    },
    {
      name: "Step 2",
      children: [
        {
          name: "Algorithms",
          children: [{ name: "Theory" }, { name: "Practice" }],
        },
        {
          name: "OS",
          children: [{ name: "Theory" }, { name: "Practice" }],
        },
        {
          name: "Computer Architecture",
          children: [{ name: "Theory" }, { name: "Practice" }],
        },
        {
          name: "Networking",
          children: [{ name: "Theory" }, { name: "Practice" }],
        },
        {
          name: "Cybersecurity",
          children: [{ name: "Theory" }, { name: "Practice" }],
        },
        {
          name: "Cloud computing",
          children: [{ name: "Theory" }, { name: "Practice" }],
        },
      ],
    },
    {
      name: "Step 3",
      children: [
        {
          name: "Design & Dev Principles",
          children: [
            { name: "GOF Design Patterns" },
            { name: "Domain Driven Design" },
            { name: "Test Driven Dev" },
            { name: "CQRS" },
            { name: "Event Sourcing" },
          ],
        },
        {
          name: "Architectural Patterns",
          children: [
            { name: "Monolithic Apps" },
            { name: "Microservices" },
            { name: "SOA" },
            { name: "Serverless" },
            { name: "Service Mesh" },
            { name: "Twelve Factor Apps" },
          ],
        },
        { name: "Elasticsearch" },
        {
          name: "Message Brokers",
          children: [{ name: "RabbitMQ" }],
        },
        {
          name: "Containerization vs Virtualization",
          children: [{ name: "Docker" }, { name: "Kubernetes" }],
        },
        {
          name: "GraphQL",
          children: [{ name: "Apollo" }],
        },
        { name: "WEbSockets" },
        { name: "Server Sent Events" },
        {
          name: "Web Servers",
          children: [{ name: "Nginx" }, { name: "Apache" }],
        },
        {
          name: "Building for Scale",
          children: [
            { name: "Instrumentation" },
            { name: "Monitoring" },
            { name: "Telemetry" },
            { name: "Graceful Degradation" },
            { name: "Throttling" },
            { name: "Backpressure" },
            { name: "Loadshifting" },
            { name: "Circuit Breaker" },
            { name: "Migration Strategies" },
            { name: "Types of Scaling" },
            { name: "Observability" },
          ],
        },
      ],
    },
    {
      name: "Dream Company",
      children: [
        {
          name: "Financial Assistants",
          children: [
            {
              name: "NLP",
              children: [{ name: "NLTK" }, { name: "spaCy" }],
            },
            {
              name: "Sentiment Analysis",
              children: [{ name: "TensorFlow" }, { name: "PyTorch" }],
            },
            {
              name: "Web Scraping",
              children: [{ name: "Beautiful Soup" }, { name: "Scrapy" }],
            },
          ],
        },
        {
          name: "Trading Algorithms",
          children: [
            {
              name: "Time Series Analysis",
              children: [{ name: "statsmodels" }],
            },
            {
              name: "Machine Learning Models",
              children: [
                { name: "Scikit-learn (basic)" },
                { name: "TensorFlow" },
                { name: "PyTorch" },
              ],
            },
            {
              name: "Financial Data APIs",
              children: [{ name: "Alpha Vantage" }, { name: "Yahoo Finance" }],
            },
          ],
        },
        {
          name: "Asset Management",
          children: [
            {
              name: "Optimization Algorithms",
              children: [{ name: "linear programming " }, { name: "Scipy" }],
            },
            {
              name: "Machine Learning for Finance",
              children: [{ name: "Specialized ML" }],
            },
            {
              name: "Quantitative Finance Libraries",
              children: [{ name: "QuantLib" }],
            },
          ],
        },
        {
          name: "Risk Analysis",
          children: [
            {
              name: "Statistical Analysis",
              children: [{ name: "statsmodels " }, { name: "R" }],
            },
            {
              name: "Data Visualization",
              children: [
                { name: "Matplotlib" },
                { name: "Seaborn" },
                { name: "Plotly" },
              ],
            },
          ],
        },
        {
          name: "Price Prediction",
          children: [
            {
              name: "Deep Learning Models",
              children: [{ name: "TensorFlow" }, { name: "PyTorch" }],
            },
          ],
        },
        {
          name: "AI Communication",
          children: [
            {
              name: "Advanced NLP and Speech Recognition",
              children: [
                { name: "Google's BERT" },
                { name: "SpeechRecognition" },
              ],
            },
            {
              name: "Text-to-Speech",
              children: [{ name: "gTTS" }],
            },
            {
              name: "Chatbot Frameworks",
              children: [{ name: "Rasa" }, { name: "Dialogflow" }],
            },
          ],
        },
      ],
    },
  ],
};

export default BackEnd;
