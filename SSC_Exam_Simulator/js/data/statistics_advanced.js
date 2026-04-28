const statisticsData = {
    stat_presentation: {
        category: "Math: Statistics (Tier 2)",
        title: "Data Presentation & Descriptive Stats: Deep Dive",
        subtitle: "Graphs, Central Tendency, Dispersion",
        blocks: [
            {
                title: "1. Data Presentation",
                text: "Data can be primary (collected directly) or secondary. Presented via tables and graphs.",
                examples: [
                    "Histogram: Continuous data (bars touch). Area of bars is proportional to frequency.",
                    "Bar Chart: Categorical data (gaps between bars).",
                    "Pie Chart: Proportions of a whole (360 degrees).",
                    "Ogive: A cumulative frequency polygon. Can be 'less than' or 'more than' type."
                ],
                shortcut: "In a pie chart, Central Angle = (Component Value / Total Value) × 360°. The intersection of 'less than' and 'more than' ogives gives the MEDIAN."
            },
            {
                title: "2. Central Tendency & Dispersion",
                text: "Measures of where data centers and how it spreads.",
                examples: [
                    "Mean (x̄): Average. Sum of terms / Number of terms.",
                    "Median: Middle value. If n is even, it is the average of the two middle values: ((n/2)th + ((n/2)+1)th) / 2.",
                    "Mode: Most frequent observation.",
                    "Range: Maximum Value - Minimum Value.",
                    "Variance (σ²): The average of the squared differences from the Mean.",
                    "Standard Deviation (σ): The square root of the Variance. Measures absolute dispersion.",
                    "Coefficient of Variation (CV): (Standard Deviation / Mean) × 100. Measures relative dispersion."
                ],
                shortcut: "Empirical Relation: Mode = 3(Median) - 2(Mean). If every observation is multiplied by k, Mean and SD are also multiplied by k, but Variance is multiplied by k²."
            }
        ]
    },
    stat_probability: {
        category: "Math: Statistics (Tier 2)",
        title: "Probability & Distributions: Deep Dive",
        subtitle: "Bayes' Theorem and Random Variables",
        blocks: [
            {
                title: "1. Basic Probability & Set Theory",
                text: "Probability of an event E is P(E) = (Favorable Outcomes) / (Total Outcomes).",
                examples: [
                    "Addition Rule (Mutually Exclusive): P(A ∪ B) = P(A) + P(B)",
                    "Addition Rule (General): P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
                    "Multiplication Rule (Independent): P(A ∩ B) = P(A) × P(B)",
                    "Conditional Probability: P(A|B) = P(A ∩ B) / P(B)"
                ],
                shortcut: "Bayes' Theorem updates the probability of an event based on new evidence: P(A|B) = [P(B|A)P(A)] / P(B). Always use a tree diagram for conditional probability!"
            },
            {
                title: "2. Standard Distributions",
                text: "Theoretical patterns of probabilities.",
                examples: [
                    "Binomial Distribution: Fixed number of independent yes/no trials. P(x) = ⁿCₓ(p)ˣ(q)ⁿ⁻ˣ. Mean = np, Variance = npq.",
                    "Poisson Distribution: Number of events in a fixed time/space. Mean = Variance = λ.",
                    "Normal Distribution: Bell-shaped curve, symmetrical around the mean. Total area under curve = 1."
                ],
                shortcut: "In a Normal Distribution, approx 68% of data falls within 1 standard deviation of the mean (μ±1σ), 95% within 2 (μ±2σ), and 99.7% within 3 (μ±3σ)."
            }
        ]
    },
    stat_inference: {
        category: "Math: Statistics (Tier 2)",
        title: "Sampling & Hypothesis Testing: Deep Dive",
        subtitle: "Estimation and ANOVA",
        blocks: [
            {
                title: "1. Sampling Techniques",
                text: "Methods to select a subset of a population.",
                examples: [
                    "Simple Random: Every item has equal chance.",
                    "Stratified: Population divided into groups (strata), random samples drawn from each. Used when population is heterogeneous.",
                    "Cluster: Population divided into clusters, entire clusters randomly selected. Used to reduce costs.",
                    "Systematic: Selecting every k-th element from a list."
                ],
                shortcut: "Stratified is best when subgroups differ greatly from each other but are similar internally. Cluster is best when subgroups are similar to each other but diverse internally."
            },
            {
                title: "2. Hypothesis Testing & Errors",
                text: "Testing a claim about a population parameter.",
                examples: [
                    "Null Hypothesis (H0): Statement of no effect/difference.",
                    "Z-test: Large sample (n>30) and known population variance.",
                    "t-test: Small sample (n<30) and unknown population variance.",
                    "Chi-square test (χ²): For categorical data (goodness of fit, independence).",
                    "F-test / ANOVA: To compare variances or means of three or more groups."
                ],
                shortcut: "Type I Error (Alpha): Rejecting H0 when it's true (False Positive). Type II Error (Beta): Failing to reject H0 when it's false (False Negative). Power of a test = 1 - Beta."
            }
        ]
    }
};
