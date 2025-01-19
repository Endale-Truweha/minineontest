"use client";
import { useEffect, useState } from "react";
import IssueCard from "@/components/IssueCard";
import Footer from "@/components/footer";

interface Issue {
  id: string;
  description: string;
  status: string;
  telegramUser: {
    username: string;
  };
}

export default function IssuesPage() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch("/api/issues");
        const data = await response.json();
        if (response.ok) {
          setIssues(data.issues);
        } else {
          console.error("Error fetching issues:", data.error);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading issues...</p>;
  }

  if (issues.length === 0) {
    return <p className="text-center mt-10">No issues found.</p>;
  }

  return (


    <div>  
    <div className='bg-ethBlack-600  flex  items-center justify-center '>
     
    <div className=' text-white w-full h-full min-h-screen font-bold flex flex-col  mb-60'>

     
    <div className='flex flex-col rounded-t-[48px] bg-ethBlack-500 border-t-2 shadow-2xl border-ethYellow-500 w-full grow p-8'>


    
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Issues</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {issues.map((issue) => (
          <IssueCard
            key={issue.id}
            id={issue.id}
            description={issue.description}
            status={issue.status}
           
          />
        ))}
      </div>
    </div></div>

</div></div>
<Footer/>
</div>
  );
}
