import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import DigitalMarketing from "@/pages/Digital-Marketing";
import HRServices from "@/pages/HR-Services";
import FinanceAccountingServices from "@/pages/Finance-Accounting-Services";
import CloudDevopsServices from "@/pages/Cloud-Devops-Services";
import DataAnalyticsService from "@/pages/Data-Analytics-Service";
import DigitalInfrastructureSupportServices from "@/pages/Digital-Infrastructure-Support-Services";
import QualityEngineeringAssurance from "@/pages/Quality-Engineering-Assurance";
import CustomerSupport from "@/pages/Customer-Support";
import NetSuiteServices from "@/pages/NetSuite-Services";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/digital-marketing" component={DigitalMarketing} />
      <Route path="/hr-services" component={HRServices} />
      <Route path="/finance-accounting-services" component={FinanceAccountingServices} />
      <Route path="/cloud-devops-services" component={CloudDevopsServices} />
      <Route path="/data-analytics-service" component={DataAnalyticsService} />
      <Route path="/digital-infrastructure-support-services" component={DigitalInfrastructureSupportServices} />
      <Route path="/quality-engineering-assurance" component={QualityEngineeringAssurance} />
      <Route path="/customer-support" component={CustomerSupport} />
      <Route path="/netsuite-services" component={NetSuiteServices} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;