const skillCategories = [
  {
    title: "Framework & Languages",
    skills: [
      { name: ".NET", icon: "/img/icon/dotnet.png" },
      { name: ".NET Core", icon: "/img/icon/dotnet-core.png" },
      { name: "Entity Framework", icon: "/img/icon/dotnet-entity.png" },
      { name: "Rest API", icon: "/img/icon/rest-api.png" },
      { name: "C#", icon: "/img/icon/c-sharp.png" },
      { name: "Blazor", icon: "/img/icon/blazor.png" },
      { name: "VB .NET", icon: "/img/icon/vb-dotnet.png" },
      { name: "JavaScript", icon: "/img/icon/js.png" },
      { name: "TypeScript", icon: "/img/icon/typescript.png" },
      { name: "React", icon: "/img/icon/react.png" },
      { name: "Bootstrap", icon: "/img/icon/bootstrap.png" },
      { name: "HTML", icon: "/img/icon/html-5.png" },
      { name: "CSS", icon: "/img/icon/css-3.png" },
    ],
  },
  {
    title: "Storage & Tools",
    skills: [
      { name: "SQL Server", icon: "/img/icon/sql-server.png" },
      { name: "Elastic Search", icon: "/img/icon/elasticsearch.png" },
      { name: "Cosmos DB", icon: "/img/icon/cosmos-db.png" },
      { name: "MongoDB", icon: "/img/icon/mongodb.png" },
      { name: "PostgreSQL", icon: "/img/icon/postgresql.png" },
      { name: "IBM DB2", icon: "/img/icon/ibm-db2.png" },
      { name: "MY SQL", icon: "/img/icon/mysql.png" },
      { name: "Component One", icon: "/img/icon/component-one.png" },
      { name: "Telerik", icon: "/img/icon/telerik.png" },
      { name: "Infragistics", icon: "/img/icon/infragistics.png" },
      { name: "Crystal Report", icon: "/img/icon/crystal-report.png" },
      { name: "GitHub", icon: "/img/icon/github.png" },
      { name: "Subversion", icon: "/img/icon/subversion.png" },
      { name: "Azure DevOps", icon: "/img/icon/azure-devops.png" },
    ],
  },
  {
    title: "Cloud & Paradigms",
    skills: [
      { name: "Azure", icon: "/img/icon/azure.png" },
      { name: "AWS", icon: "/img/icon/aws.png" },
      { name: "Docker", icon: "/img/icon/docker.png" },
      { name: "Agile", icon: "/img/icon/agile.png" },
      { name: "Waterfall", icon: "/img/icon/waterfall.png" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Python", icon: "/img/icon/python.png" },
      { name: "LangChain", icon: "/img/icon/langchain.png" },
      { name: "OpenAI", icon: "/img/icon/openai.png" },
      { name: "RAG", icon: "/img/icon/rag.png" },
      { name: "Databricks", icon: "/img/icon/databricks.png" },
    ],
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">Technical Expertise</h2>
        </div>

        <div className="space-y-20">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-10 flex flex-col items-center">
              <h3 className="text-2xl font-bold border-b-2 border-primary pb-2 px-4 text-center inline-block">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group w-40 flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                      {/* Outer circular ring */}
                      <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-primary/50 transition-all duration-500" />
                      
                      {/* Background glow */}
                      <div className="absolute inset-2 bg-primary/5 rounded-full blur-sm group-hover:bg-primary/10 transition-colors duration-500" />
                      
                      {/* Icon container */}
                      <div className="relative w-12 h-12 flex items-center justify-center p-1 rounded-full overflow-hidden">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
