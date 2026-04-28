const statisticsData = {
    stat_presentation: {
        category: "Math: Statistics (Tier 2)",
        title: "Data Presentation & Descriptive Stats",
        subtitle: "Graphs, Central Tendency, Dispersion",
        blocks: [
            {
                title: "1. Data Presentation",
                text: "Data can be primary (collected directly) or secondary. Presented via tables and graphs.",
                examples: [
                    "Histogram: Continuous data (bars touch).",
                    "Bar Chart: Categorical data (gaps between bars).",
                    "Pie Chart: Proportions of a whole (360 degrees)."
                ],
                shortcut: "In a pie chart, Central Angle = (Component Value / Total Value) × 360°"
            },
            {
                title: "2. Central Tendency & Dispersion",
                text: "Measures of where data centers and how it spreads.",
                examples: [
                    "Mean: Average. Median: Middle value. Mode: Most frequent.",
                    "Range: Max - Min.",
                    "Standard Deviation: Square root of Variance."
                ],
                shortcut: "If distribution is skewed: Mean > Median > Mode (Positive Skew). Mean < Median < Mode (Negative Skew)."
            }
        ]
    },
    stat_probability: {
        category: "Math: Statistics (Tier 2)",
        title: "Probability & Distributions",
        subtitle: "Bayes' Theorem and Random Variables",
        blocks: [
            {
                title: "1. Basic Probability",
                text: "Probability of an event E is P(E) = (Favorable Outcomes) / (Total Outcomes).",
                examples: [
                    "Addition Rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
                    "Multiplication Rule (Independent): P(A ∩ B) = P(A) × P(B)"
                ],
                shortcut: "Bayes' Theorem updates the probability of an event based on new evidence: P(A|B) = [P(B|A)P(A)] / P(B)."
            },
            {
                title: "2. Standard Distributions",
                text: "Theoretical patterns of probabilities.",
                examples: [
                    "Binomial: Fixed number of independent yes/no trials.",
                    "Poisson: Number of events in a fixed time/space.",
                    "Normal: Bell-shaped curve, symmetrical around the mean."
                ],
                shortcut: "In a Normal Distribution, approx 68% of data falls within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3."
            }
        ]
    },
    stat_inference: {
        category: "Math: Statistics (Tier 2)",
        title: "Sampling & Hypothesis Testing",
        subtitle: "Estimation and ANOVA",
        blocks: [
            {
                title: "1. Sampling Techniques",
                text: "Methods to select a subset of a population.",
                examples: [
                    "Simple Random: Every item has equal chance.",
                    "Stratified: Population divided into groups (strata), random samples drawn from each.",
                    "Cluster: Population divided into clusters, entire clusters randomly selected."
                ],
                shortcut: "Stratified is best when subgroups differ greatly from each other. Cluster is best when subgroups are similar."
            },
            {
                title: "2. Hypothesis Testing",
                text: "Testing a claim about a population parameter.",
                examples: [
                    "Null Hypothesis (H0): Statement of no effect/difference.",
                    "Z-test: Large sample (n>30) or known population variance.",
                    "t-test: Small sample (n<30) and unknown population variance.",
                    "Chi-square test: For categorical data (goodness of fit)."
                ],
                shortcut: "Type I Error: Rejecting H0 when it's true (False Positive). Type II Error: Failing to reject H0 when it's false (False Negative)."
            }
        ]
    }
};
