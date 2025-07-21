"use client";

import React, { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const getRandomPerformance = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  return months.map((month) => ({
    month,
    score: Math.floor(Math.random() * 5) + 1,
  }));
};

function page() {
  const { state } = useContext(AppContext);
    const emp = state.currentEmployee;

    
  const [tab, setTab] = useState("overview");

  if (!emp) return <p className="p-6 text-muted-foreground">No employee selected.</p>;

  const fullName = `${emp.firstName} ${emp.lastName}`;
  const performance = getRandomPerformance();

  return (
    
    <div className="p-6 max-w-4xl mx-auto space-y-6">

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{fullName}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p><strong>Email:</strong> {emp.email}</p>
            <p><strong>Phone:</strong> {emp.phone}</p>
            <p><strong>Address:</strong> {emp.address.address}, {emp.address.city}</p>
            <p><strong>Company:</strong> {emp.company.name}</p>
          </div>
          <p className="text-sm text-muted-foreground italic">
            “{emp.company.title}” — Bio: Enthusiastic team member passionate about excellence and productivity.
          </p>
        </CardContent>
      </Card>


      <div className="flex items-center gap-4">
        <Badge variant="outline" className="bg-green-100 text-green-800">
          Performance: Excellent
        </Badge>
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
          ))}
        </div>
      </div>


      <Tabs defaultValue="overview" value={tab} onValueChange={setTab} className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Performance History</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 space-y-1">
                {performance.map((p, idx) => (
                  <li key={idx}>
                    {p.month}: {p.score}{" "}
                    <Star className="inline w-4 h-4 fill-yellow-400 stroke-yellow-500" />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-6 space-y-1">
                <li>Internal Dashboard Redesign</li>
                <li>CRM Integration Module</li>
                <li>Automation Scripting Tool</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="text-muted-foreground italic">
                “{fullName} consistently exceeds expectations. Their attention to detail is unmatched.”
              </blockquote>
              <blockquote className="text-muted-foreground italic mt-2">
                “An excellent team player and communicator.”
              </blockquote>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default page;
