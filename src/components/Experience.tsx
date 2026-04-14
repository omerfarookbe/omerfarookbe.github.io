const experiences = [
  {
    date: "2021 - Present",
    title: "Senior Software Engineer",
    company: "Suzy Inc, US",
    description: [
      "Delivered $150K annual infrastructure savings by architecting horizontal database sharding in .NET Core, eliminating a SQL Server bottleneck and scaling to 1,600+ isolated Azure Elastic Pools with per-tenant data isolation and privacy enforcement.",
      "Reduced report generation time by 97% by building a centralized data platform using Azure Synapse and .NET Core, integrating 1,600+ tenant databases and multiple sources (Cosmos DB, MongoDB, Elasticsearch) to eliminate manual reporting.",
      "Reduced analyst research effort by 75% by building RAG-based conversational analytics using Python, OpenAI GPT-4o-mini and LangChain on top of a centralized data platform, enabling natural language querying and automated insights.",
      "Enabled near real-time analytics by implementing CDC pipelines from scratch using SQL Server, Azure Event Hubs, and Databricks - reducing data latency from batch (24+ hour delays) to under 2 minutes across 1,600+ tenant databases.",
      "Led service decomposition across a $50M+ ARR, 2,500+ brand SaaS platform - migrated 17 core services toward isolated per-tenant data stores, reducing cross-tenant data risk and enabling independent scaling.",
      "Cut mean incident response from 2+ hours to 25 minutes via centralized observability using App Insights and Grafana across distributed microservices.",
"Eliminated manual GDPR PII anonymization workflows, reducing processing time from ~2 days to minutes across 1,600+ tenants through a fully automated compliance service."      
    ],
    align: "left"
  },
  {
    date: "2014 - 2021",
    title: "Manager Delivery",
    company: "Cognizant Technology Solutions US Corp, US",
    description: [
      "Delivered $1M in annual cost savings by re-architecting MVR ordering process (TransUnion replacing LexisNexis), maintaining full data accuracy across Liability, Auto, and Workers' Compensation lines.",
      "Saved $150K/month in manual processing costs by leading design and delivery of an online Certificate of Insurance generation workflow (SCTS), eliminating agent and client manual processing for 8,000+ certificates monthly.",
      "Modernized IBM DB2/COBOL monolith into cloud-native .NET REST microservices over 15 months - led a 30+ engineer distributed team to zero production incidents, no business disruption, across 12,000+ downstream consumers.",
      "Established CI/CD pipelines, DevSecOps standards, and engineering governance across 70+ applications - reducing manual release overhead and enabling a cloud adoption roadmap.",
    ],
    align: "right"
  },
  {
    date: "2010 - 2014",
    title: "Senior Associate Projects",
    company: "Cognizant Technology Solutions, IND",
    description: [
      "Built real-time monitoring and alerting systems, achieving 99% application availability across insurance platforms.",
      "Engineered legacy policy archival pipeline from IMS to FileNet ($60K/year storage savings).",
      "Managed production support, application monitoring, and incident resolution, ensuring seamless outage handling and maintaining 99%+ uptime across critical insurance SaaS platforms."
    ],
    align: "left"
  },
  {
    date: "2008 - 2010",
    title: "Software Developer",
    company: "Aspen Innovation Pvt. Ltd, IND",
    description: [
      "Created online application for QA team to manage voice files and transcription documents, resulting in 35% productivity improvement.",
      "Reduced finance team costs by >50% through implementation of in-house payroll system."
    ],
    align: "right"
  },
  {
    date: "2005 - 2008",
    title: "Software Developer",
    company: "Citysoftware, IND",
    description: [
      "Modernized money exchange and transfer system connecting 20+ branches in Hong Kong.",
      "Developed interactive online application for booking movie tickets."
    ],
    align: "left"
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold">Work History</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal ${exp.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                {/* Content card */}
                <div className={`w-full md:w-[45%] group ${exp.align === 'right' ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="p-8 rounded-3xl bg-card border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-primary font-medium mb-4">{exp.company}</h4>
                    <ul className="space-y-3">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-3">
                          <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-background border-4 border-primary z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
