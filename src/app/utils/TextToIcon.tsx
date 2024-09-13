import { ChartBarStacked, RectangleHorizontal } from "lucide-react";

export function TextToIcon({
    text, size,
}: {text: string;
    size?: "small" | "medium" | "large";
}){
    switch(text){
        case "ChartBarStacked": 
        return <ChartBarStacked fontSize={size} className="text-green-500"/>;

        case "RectangleHorizontal":
        return <RectangleHorizontal fontSize={size} className="text-green-500"/>;
        default: 
        return <ChartBarStacked fontSize={size} className="text-green-500"/>;
    }
}