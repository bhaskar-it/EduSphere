import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const profiles = [
  { 
    name: "John Doe", 
    role: "Mentor", 
    expertise: "Deep Learning, Computer Vision", 
    bio: "John has worked on several deep learning models for image recognition.", 
    photo: "https://randomuser.me/api/portraits/men/1.jpg" 
  },
  { 
    name: "Alice Johnson", 
    role: "Student", 
    expertise: "ML, Data Science", 
    bio: "Alice is currently exploring machine learning models for data analysis.", 
    photo: "https://randomuser.me/api/portraits/women/2.jpg" 
  },
  { 
    name: "Dr. Robert Brown", 
    role: "Faculty", 
    expertise: "Reinforcement Learning, Robotics", 
    bio: "Dr. Brown's research focuses on reinforcement learning and its applications in robotics.", 
    photo: "https://randomuser.me/api/portraits/men/2.jpg" 
  },
  { 
    name: "Mary Davis", 
    role: "Mentor", 
    expertise: "ML, Deep Learning", 
    bio: "Mary helps students build their understanding of ML algorithms and deep learning techniques.", 
    photo: "https://randomuser.me/api/portraits/women/3.jpg" 
  },
  { 
    name: "Eve Clark", 
    role: "Student", 
    expertise: "AI, DL", 
    bio: "Eve is a master's student researching deep learning in AI.", 
    photo: "https://randomuser.me/api/portraits/women/4.jpg" 
  },
  { 
    name: "Michael Green", 
    role: "Faculty", 
    expertise: "Artificial Intelligence, Cognitive Computing", 
    bio: "Michael specializes in AI and cognitive computing research.", 
    photo: "https://randomuser.me/api/portraits/men/3.jpg" 
  },
  { 
    name: "Olivia White", 
    role: "Mentor", 
    expertise: "Computer Vision, Deep Learning", 
    bio: "Olivia has experience in deep learning models used for object detection.", 
    photo: "https://randomuser.me/api/portraits/women/5.jpg" 
  },
  { 
    name: "James Taylor", 
    role: "Student", 
    expertise: "Data Science, Machine Learning", 
    bio: "James is working on projects related to big data analytics and machine learning models.", 
    photo: "https://randomuser.me/api/portraits/men/4.jpg" 
  },
  { 
    name: "Sophia Lee", 
    role: "Faculty", 
    expertise: "NLP, Reinforcement Learning", 
    bio: "Sophia’s research focuses on natural language processing and reinforcement learning applications.", 
    photo: "https://randomuser.me/api/portraits/women/6.jpg" 
  },
];

export default function ExpertisePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-muted/50 px-4 py-12">
      <div className="w-full max-w-5xl">
        <Card className="shadow-md border-none mb-8">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center">Specialized Mentors, Students, and Faculties</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg text-muted-foreground mb-6">
              Discover professionals and students specializing in your field of interest, from Machine Learning to Deep Learning and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile, index) => (
                <Card key={index} className="shadow-md border-none">
                  <CardHeader className="flex items-center">
                    <img 
                      src={profile.photo} 
                      alt={profile.name} 
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{profile.name}</h3>
                      <p className="text-sm text-muted-foreground">{profile.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm font-medium text-primary">{profile.expertise}</p>
                    <p className="text-base leading-relaxed">{profile.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
