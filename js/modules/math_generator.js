// Math Generators
// Dynamically creates calculative SSC CGL Math questions (TCS 2025 Pattern)

const MathGenerator = {
    generateQuestions: function(count) {
        let questions = [];
        const topics = [
            'profitLoss', 'timeWork', 'speedDistance', 'algebra', 
            'trigonometry', 'percentage', 'simpleInterest', 'geometry'
        ];
        for(let i=0; i<count; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            questions.push(this[topic](i));
        }
        return questions;
    },

    profitLoss: function(index) {
        const cp = (Math.floor(Math.random() * 50) + 10) * 100; // e.g., 1000 to 5000
        const profitPercent = Math.floor(Math.random() * 20) + 5; // 5% to 25%
        const sp = cp + (cp * profitPercent / 100);
        
        let options = [sp, sp - 100, sp + 200, sp * 1.1].map(Math.round);
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(Math.round(sp));

        return {
            id: `math_${index}`,
            text: `A shopkeeper bought an article for ₹${cp}. If he wants to make a profit of ${profitPercent}%, what should be the selling price?`,
            options: options.map(o => `₹${o}`),
            correctAnswer: correctIndex,
            explanation: {
                standard: `Let Cost Price (CP) = ₹${cp}.<br>Profit % = ${profitPercent}%.<br>Selling Price (SP) = CP + Profit = CP + (CP * Profit% / 100).<br>SP = ${cp} + (${cp} * ${profitPercent} / 100) = ${cp} + ${cp * profitPercent / 100} = ₹${sp}.`,
                trick: `Multiplier Trick: A ${profitPercent}% profit means the SP is ${100 + profitPercent}% of CP.<br>So, SP = ${cp} × 1.${profitPercent.toString().padStart(2, '0')} = ₹${sp}. Solve it in one line!`
            }
        };
    },

    timeWork: function(index) {
        const aDays = Math.floor(Math.random() * 10) + 10;
        const bDays = Math.floor(Math.random() * 15) + 15;
        
        const lcm = (aDays * bDays) / this.gcd(aDays, bDays);
        const aEff = lcm / aDays;
        const bEff = lcm / bDays;
        const totalDays = (lcm / (aEff + bEff)).toFixed(2);
        
        let options = [totalDays, (totalDays*1.2).toFixed(2), (totalDays*0.8).toFixed(2), (aDays+bDays).toString()];
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(totalDays);

        return {
            id: `math_${index}`,
            text: `A can do a piece of work in ${aDays} days and B can do the same work in ${bDays} days. If they work together, in how many days will the work be completed?`,
            options: options.map(o => `${o} days`),
            correctAnswer: correctIndex,
            explanation: {
                standard: `A's 1 day work = 1/${aDays}.<br>B's 1 day work = 1/${bDays}.<br>(A+B)'s 1 day work = 1/${aDays} + 1/${bDays} = (${aDays}+${bDays}) / (${aDays}×${bDays}).<br>Total days = reciprocal = (${aDays}×${bDays}) / (${aDays}+${bDays}) = ${totalDays} days.`,
                trick: `LCM Method: Assume total work = LCM(${aDays}, ${bDays}) = ${lcm} units.<br>Efficiency of A = ${lcm}/${aDays} = ${aEff} units/day.<br>Efficiency of B = ${lcm}/${bDays} = ${bEff} units/day.<br>Total Days = Total Work / Total Efficiency = ${lcm} / (${aEff}+${bEff}) = ${totalDays} days.`
            }
        };
    },

    speedDistance: function(index) {
        const speedKmph = (Math.floor(Math.random() * 5) + 5) * 18;
        const timeSec = Math.floor(Math.random() * 30) + 10;
        
        const speedMps = speedKmph * (5/18);
        const distance = speedMps * timeSec;
        
        let options = [distance, distance+50, distance-50, distance*2];
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(distance);
        
        return {
            id: `math_${index}`,
            text: `A train is running at a speed of ${speedKmph} km/hr. How much distance (in meters) will it cover in ${timeSec} seconds?`,
            options: options.map(o => `${o} m`),
            correctAnswer: correctIndex,
            explanation: {
                standard: `First, convert speed from km/hr to m/s because time is in seconds.<br>Speed = ${speedKmph} × (1000m / 3600s) = ${speedKmph} × (5/18) = ${speedMps} m/s.<br>Distance = Speed × Time = ${speedMps} × ${timeSec} = ${distance} meters.`,
                trick: `Direct Conversion Trick: Remember 18 km/h = 5 m/s.<br>${speedKmph} km/h is ${speedKmph/18} times of 18, so speed is ${speedKmph/18} × 5 = ${speedMps} m/s.<br>${speedMps} × ${timeSec} = ${distance} m.`
            }
        };
    },

    algebra: function(index) {
        const x = Math.floor(Math.random() * 5) + 2; 
        const val = x + (1/x);
        const target = (val*val) - 2; 
        
        let options = [target, target+2, target-2, target*2];
        options = [...new Set(options)];
        while(options.length < 4) options.push(options[0] + Math.floor(Math.random()*10)+1);
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(target);
        
        return {
            id: `math_${index}`,
            text: `If x + (1/x) = ${val}, then what is the value of x² + (1/x²)?`,
            options: options.map(String),
            correctAnswer: correctIndex,
            explanation: {
                standard: `Square both sides: (x + 1/x)² = ${val}².<br>x² + 1/x² + 2(x)(1/x) = ${val * val}.<br>x² + 1/x² + 2 = ${val * val}.<br>x² + 1/x² = ${val * val} - 2 = ${target}.`,
                trick: `Value Formula Trick: If x + 1/x = a, then x² + 1/x² is ALWAYS a² - 2.<br>Here a = ${val}. So, ${val}² - 2 = ${target}. (2-second solve!)`
            }
        };
    },

    trigonometry: function(index) {
        const angles = [30, 45, 60];
        const angle = angles[Math.floor(Math.random() * angles.length)];
        let target, formula;
        
        if (angle === 30) { target = '1/2'; formula = 'sin(30°) = 1/2'; }
        else if (angle === 45) { target = '1/√2'; formula = 'sin(45°) = 1/√2'; }
        else { target = '√3/2'; formula = 'sin(60°) = √3/2'; }

        let options = [target, '1', '0', '√3'];
        options = [...new Set(options)];
        while(options.length < 4) options.push('2');
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(target);

        return {
            id: `math_${index}`,
            text: `What is the exact value of sin(${angle}°)?`,
            options: options,
            correctAnswer: correctIndex,
            explanation: {
                standard: `By definition of trigonometric ratios in a right-angled triangle, ${formula}.`,
                trick: `Finger Trick: Number your fingers 0 to 4 (Thumb=0°, Index=30°, Middle=45°, Ring=60°, Pinky=90°). sin(θ) = √(fingers below) / 2.`
            }
        };
    },

    percentage: function(index) {
        const base = (Math.floor(Math.random() * 5) + 2) * 100;
        const inc = Math.floor(Math.random() * 5) * 10 + 10;
        const dec = Math.floor(Math.random() * 5) * 10 + 10;
        const finalVal = base * (1 + inc/100) * (1 - dec/100);

        let options = [finalVal, finalVal+10, finalVal-10, base].map(Math.round);
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(Math.round(finalVal));

        return {
            id: `math_${index}`,
            text: `The population of a town is ${base}. It increases by ${inc}% in the first year and decreases by ${dec}% in the second year. What is the final population?`,
            options: options.map(String),
            correctAnswer: correctIndex,
            explanation: {
                standard: `Year 1 Population = ${base} + (${inc}% of ${base}) = ${base * (1 + inc/100)}.<br>Year 2 Population = ${base * (1 + inc/100)} - (${dec}% of ${base * (1 + inc/100)}) = ${finalVal}.`,
                trick: `Successive Percentage Formula: Net % change = A + B + (A×B)/100.<br>Net % = ${inc} - ${dec} + (${inc}×-${dec})/100 = ${inc - dec - (inc*dec)/100}%. Apply this net % to ${base}.`
            }
        };
    },

    simpleInterest: function(index) {
        const p = (Math.floor(Math.random() * 10) + 5) * 1000;
        const r = Math.floor(Math.random() * 10) + 5;
        const t = Math.floor(Math.random() * 3) + 2;
        const si = (p * r * t) / 100;

        let options = [si, si+500, si-500, si*1.1].map(Math.round);
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(Math.round(si));

        return {
            id: `math_${index}`,
            text: `What will be the Simple Interest on a principal of ₹${p} at a rate of ${r}% per annum for ${t} years?`,
            options: options.map(o => `₹${o}`),
            correctAnswer: correctIndex,
            explanation: {
                standard: `Formula: SI = (P × R × T) / 100.<br>SI = (${p} × ${r} × ${t}) / 100 = ₹${si}.`,
                trick: `R% for T years is equivalent to a single effective rate of (R × T)%.<br>Effective Rate = ${r} × ${t} = ${r*t}%.<br>Just find ${r*t}% of ₹${p} = ₹${si}.`
            }
        };
    },

    geometry: function(index) {
        const sides = Math.floor(Math.random() * 5) + 5; // 5 to 9
        const extAngle = 360 / sides;

        let options = [extAngle, extAngle+10, extAngle-10, 360];
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(extAngle);

        return {
            id: `math_${index}`,
            text: `What is the measure of each exterior angle of a regular polygon with ${sides} sides?`,
            options: options.map(o => `${o}°`),
            correctAnswer: correctIndex,
            explanation: {
                standard: `For any convex polygon, the sum of all exterior angles is ALWAYS 360°.<br>Since it is a regular polygon, all exterior angles are equal.<br>Each exterior angle = 360° / ${sides} = ${extAngle}°.`,
                trick: `Exterior Angle = 360 / n. If interior angle is given, Exterior = 180 - Interior. Then n = 360 / Exterior.`
            }
        };
    },

    gcd: function(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }
};
