const publications = [
  {
    title: "Electric Vehicles (EVS) with AI Technology",
    date: "01-Jan-2024",
    author: "Omer Farook",
    image: "/img/blg-1.jpg",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OQ4kq0gAAAAJ&citation_for_view=OQ4kq0gAAAAJ:u-x6o8ySG0sC",
    description: "The study discusses the revolutionary impacts of artificial intelligence (AI) on Electric Vehicles. Vehicle performance, safety, and user experience are all improved by this confluence. AI systems enhance energy management, increasing EV range and charging effectiveness."
  },
  {
    title: "Edge Computing and Federated Learning for Real-Time Anomaly Detection in IIoT",
    date: "01-Feb-2024",
    author: "Omer Farook",
    image: "/img/blg-2.jpg",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=OQ4kq0gAAAAJ&citation_for_view=OQ4kq0gAAAAJ:u5HHmVD_uO8C",
    description: "This paper proposes an innovative approach that combines edge computing and federated learning for efficient and real-time anomaly detection in IIoT environments. The goal is to enhance the reliability and responsiveness of anomaly detection systems."
  }
];

export const Publications = () => {
  return (
    <section id="publications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase">Publications</p>
          <h2 className="text-4xl md:text-5xl font-bold">Research & Papers</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {publications.map((pub, idx) => (
            <div key={idx} className="group overflow-hidden rounded-3xl bg-card border border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/30">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={pub.image} 
                  alt={pub.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {pub.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {pub.date}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {pub.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-4">
                  {pub.description}
                </p>
                
                <div className="pt-4">
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Read Full Paper
                    <span className="h-0.5 w-4 bg-primary transition-all group-hover/link:w-8" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
