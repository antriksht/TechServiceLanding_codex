import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export const computeSavings = (numAgents: number, hourlyRate: number) => {
  const currentCost = numAgents * hourlyRate * 40 * 52 * 1.2;
  const ourServiceCost = numAgents * 7 * 170 * 12;
  return currentCost - ourServiceCost;
};

const BPOCalculator: React.FC = () => {
  const [agents, setAgents] = useState<number | "">("");
  const [rate, setRate] = useState<number | "">("");
  const [message, setMessage] = useState<string | null>(null);

  const calculateSavings = () => {
    const numAgents = Number(agents);
    const hourlyRate = Number(rate);

    if (!numAgents || !hourlyRate || numAgents < 0 || hourlyRate < 0) {
      setMessage("Please enter valid numbers.");
      return;
    }

    const savings = computeSavings(numAgents, hourlyRate);

    if (savings < 0) {
      setMessage("Your case might qualify for a special rate. Let's connect.");
    } else {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      setMessage(`Estimated Savings: ${formatter.format(savings)}`);
    }
  };

  return (
    <section className="py-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-6">
          Estimate Your Annual BPO Savings
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Use this calculator to estimate your potential savings when you
          outsource your customer support team with us.
        </p>
      </div>

      <Card className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg group max-w-3xl mx-auto">
        <div className="h-3 bg-gradient-to-r from-primary to-accent"></div>
        <CardContent className="p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <DollarSign className="text-primary text-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-800 font-medium mb-1">
                # of Inhouse CS Agents
              </label>
              <input
                type="number"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={agents}
                onChange={(e) =>
                  setAgents(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-1">
                Average Hourly Rate ($)
              </label>
              <input
                type="number"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={rate}
                onChange={(e) =>
                  setRate(e.target.value === "" ? "" : Number(e.target.value))
                }
              />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={calculateSavings}
              className="bg-primary text-white font-semibold text-lg px-6 py-2 rounded-full hover:bg-primary/90 transition"
            >
              Calculate
            </button>
          </div>

          {message && (
            <div className="mt-6 text-center">
              <p
                className={`text-lg font-semibold ${
                  message.startsWith("Estimated") ? "text-green-700" : "text-blue-600"
                }`}
              >
                {message}
              </p>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-6 text-center">
            Please note that the annual savings calculated are only an estimate and are based on our starting rates for customer care services. Actual savings may vary.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default BPOCalculator;
