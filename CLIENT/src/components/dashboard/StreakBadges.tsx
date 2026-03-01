import { Flame, Trophy, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

export default function StreakBadges({ streaks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {streaks.map((streak) => (
        <Card key={streak.title} className="p-5 border-0 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-sm">{streak.title} Streak (mock Data)</h4>
            <Flame className="w-5 h-5 text-warning" />
          </div>



          {/* Stats row */}
          <div className="flex  flex-col gap-y-5">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-xl font-extrabold leading-none">{streak.currentStreak}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Current</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-xl font-bold leading-none">{streak.longestStreak}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Longest</p>
                </div>
              </div>
            </div>
            {/* Weekly consistency */}
            <div className="flex items-center gap-1.5 mb-5">
              {streak.weeklyConsistency.map((active, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-medium transition-colors ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {dayLabels[i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}