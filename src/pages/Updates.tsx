import { useState } from "react";
import OpportunityCard, {
  OpportunityCardProps,
} from "@/components/OpportunityCard";
import Tabs from "@/components/Tabs";
import Navigation from "@/components/Navigation";
import { Briefcase, GraduationCap } from "lucide-react";

const opportunitiesList: Map<string, OpportunityCardProps[]> = new Map([
  [
    "Education",
    [
      {
        title: "GREAT OPPORTUNITY FOR DROP OUT STUDENTS.",
        description: (
          <div>
            <p className="text-primary font-bold">
              Last date: 15th October 2025
            </p>
            <p>
              <strong>Course:</strong> 10th and 12th classes
            </p>
            <p>
              <strong>Fees:</strong> Rs 15,000 (registration + exam)
            </p>
            <p>
              <strong>Exam:</strong> Online, Objective type
            </p>
            <p>
              <strong>Tuition:</strong> Boys: Rs 1000/month, Girls: Rs 500/month
              (2 hrs daily, Mon–Fri)
            </p>
            <p className="text-primary font-medium">
              Scholarship available for eligible candidates
            </p>
            <div>
              <p className="font-semibold">Documents needed:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li key={1}>Birth certificate</li>
                <li key={2}>Aadhar Card</li>
                <li key={3}>School leaving certificate (if available)</li>
                <li key={4}>
                  10th class pass certificate (for 12th admission)
                </li>
              </ul>
            </div>
            <p>
              <strong>University:</strong> NIOS – Jamia Urdu Aligarh
            </p>
            <p>
              <strong>Subjects:</strong>English, Hindi, Urdu, Social Science,
              Math, Science
            </p>
            <p className="font-semibold text-blue-600">
              For more details, contact:{" "}
              <a href="tel:7698853478" className="hover:underline">
                7698853478
              </a>
            </p>
            ,
          </div>
        ),
        location: "Community Center",
        icon: GraduationCap,
        deadline: "15th October 2025",
      },
    ],
  ],
  ["Job", []],
  ["Scholarship", []],
]);

export default function OpportunitiesSection() {
  const [activeTab, setActiveTab] = useState("Education");
  const categories = Array.from(opportunitiesList.keys());

  const currentOpportunities = opportunitiesList.get(activeTab) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="py-10 px-4">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          Opportunities
        </h1>

        <Tabs
          categories={categories}
          active={activeTab}
          onChange={setActiveTab}
        />

        {currentOpportunities.length === 0 ? (
          <p className="text-center text-gray-500">
            No {activeTab.toLowerCase()} opportunities available at the moment.
          </p>
        ) : (
          <div className="space-y-6">
            {currentOpportunities.map((opp, index) => (
              <OpportunityCard
                key={index}
                title={opp.title}
                description={opp.description}
                location={opp.location}
                deadline={opp.deadline}
                type={opp.type}
                icon={opp.icon}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
