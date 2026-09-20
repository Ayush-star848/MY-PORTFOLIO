import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
// AI & Generative AI
{ name: "Generative AI", level: 85, category: "ai" },
{ name: "LLM Applications", level: 82, category: "ai" },
{ name: "RAG", level: 80, category: "ai" },
{ name: "AI Agents", level: 78, category: "ai" },
{ name: "Prompt Engineering", level: 85, category: "ai" },
{ name: "MCP", level: 75, category: "ai" },
{ name: "LLM Evals", level: 72, category: "ai" },
{ name: "Embeddings", level: 78, category: "ai" },
{ name: "Transformer Models", level: 72, category: "ai" },
{ name: "NLP", level: 75, category: "ai" },
{ name: "Fine-Tuning", level: 65, category: "ai" },

// Backend & APIs
{ name: "Python", level: 85, category: "backend" },
{ name: "TypeScript", level: 80, category: "backend" },
{ name: "Node.js", level: 78, category: "backend" },
{ name: "NestJS", level: 80, category: "backend" },
{ name: "FastAPI", level: 78, category: "backend" },
{ name: "REST APIs", level: 85, category: "backend" },
{ name: "JWT", level: 75, category: "backend" },
{ name: "OAuth", level: 65, category: "backend" },
{ name: "RBAC", level: 78, category: "backend" },
{ name: "Microservices", level: 65, category: "backend" },

// Data Engineering
{ name: "Apache Spark", level: 78, category: "data" },
{ name: "Azure Databricks", level: 80, category: "data" },
{ name: "Azure Data Factory", level: 75, category: "data" },
{ name: "Delta Lake", level: 75, category: "data" },
{ name: "ETL", level: 82, category: "data" },
{ name: "Data Modeling", level: 78, category: "data" },
{ name: "Medallion Architecture", level: 75, category: "data" },
{ name: "Jinja", level: 70, category: "data" },

// Databases & SQL
{ name: "SQL", level: 88, category: "database" },
{ name: "PostgreSQL", level: 82, category: "database" },
{ name: "MySQL", level: 78, category: "database" },

// Cloud
{ name: "GCP", level: 65, category: "cloud" },
{ name: "Microsoft Azure", level: 75, category: "cloud" },

// Machine Learning
{ name: "Scikit-learn", level: 80, category: "ml" },
{ name: "Pandas", level: 85, category: "ml" },
{ name: "NumPy", level: 82, category: "ml" },
{ name: "Model Evaluation", level: 75, category: "ml" },
{ name: "Deep Learning Fundamentals", level: 65, category: "ml" },

// Analytics & BI
{ name: "Power BI", level: 78, category: "analytics" },
{ name: "DAX", level: 70, category: "analytics" },
{ name: "Power Query", level: 75, category: "analytics" },
{ name: "Tableau", level: 65, category: "analytics" },
{ name: "Microsoft Excel", level: 82, category: "analytics" },
{ name: "Exploratory Data Analysis", level: 80, category: "analytics" },

// Developer Tools
{ name: "Git", level: 85, category: "tools" },
{ name: "GitHub", level: 85, category: "tools" },
{ name: "VS Code", level: 90, category: "tools" },
];

const categories = [
"all",
"ai",
"backend",
"data",
"database",
"cloud",
"ml",
"analytics",
"tools",
];

export const SkillsSection = () => {
const [activeCategory, setActiveCategory] = useState("all");

const filteredSkills = skills.filter(
(skill) =>
activeCategory === "all" || skill.category === activeCategory
);

return ( <section id="skills" className="py-24 px-4 relative bg-secondary/30"> <div className="container mx-auto max-w-5xl"> <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
My <span className="text-primary"> Skills</span> </h2>

```
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category, key) => (
        <button
          key={key}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary/70 text-foreground hover:bg-secondary"
          )}
        >
          {category}
        </button>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSkills.map((skill, key) => (
        <div
          key={key}
          className="bg-card p-6 rounded-lg shadow-xs card-hover"
        >
          <div className="text-left mb-4">
            <h3 className="font-semibold text-lg">{skill.name}</h3>
          </div>

          <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
              style={{ width: `${skill.level}%` }}
            />
          </div>

          <div className="text-right mt-1">
            <span className="text-sm text-muted-foreground">
              {skill.level}%
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

);
};
