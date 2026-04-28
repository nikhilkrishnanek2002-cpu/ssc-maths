// Math Generators
// Dynamically creates calculative SSC CGL Math questions

const MathGenerator = {
    generateQuestions: function(count) {
        let questions = [];
        for(let i=0; i<count; i++) {
            const topics = ['profitLoss', 'timeWork', 'speedDistance', 'algebra'];
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
        const correctIndex = options.indexOf(sp);

        return {
            id: `math_${index}`,
            text: `A shopkeeper bought an article for ₹${cp}. If he wants to make a profit of ${profitPercent}%, what should be the selling price?`,
            options: options.map(o => `₹${o}`),
            correctAnswer: correctIndex,
            explanation: {
                standard: `Let Cost Price (CP) = ₹${cp}.<br>Profit % = ${profitPercent}%.<br>Selling Price (SP) = CP + Profit = CP + (CP * Profit% / 100).<br>SP = ${cp} + (${cp} * ${profitPercent} / 100) = ${cp} + ${cp * profitPercent / 100} = ₹${sp}.`,
                trick: `Multiplier Trick: A ${profitPercent}% profit means the SP is ${100 + profitPercent}% of CP.<br>So, SP = ${cp} × 1.${profitPercent} = ₹${sp}. Solve it in one line!`
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
        const target = (x*x) + (1/(x*x)); 
        
        let options = [target, target+2, target-2, target*2];
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

    gcd: function(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }
};
