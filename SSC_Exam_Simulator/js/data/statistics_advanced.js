const statisticsData = {
    stat_presentation: {
        category: "Math: Statistics (Tier 2)",
        title: "Data Presentation & Descriptive Stats: Massive Deep Dive & Speed Hacks",
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
                    "Mean (x̄): Average. Sum of terms / Number of terms. Affected by extreme values.",
                    "Median: Middle value. Best for skewed distributions. Divides data into 50-50.",
                    "Mode: Most frequent observation. Can be multi-modal.",
                    "Range: Maximum Value - Minimum Value. Simplest measure of dispersion.",
                    "Variance (σ²): The average of the squared differences from the Mean.",
                    "Standard Deviation (σ): The square root of the Variance. Measures absolute dispersion.",
                    "Coefficient of Variation (CV): (Standard Deviation / Mean) × 100. Measures relative dispersion."
                ],
                shortcut: "SPEED HACK: Empirical Relation: Mode = 3(Median) - 2(Mean). If every observation is multiplied by a constant 'k', Mean and SD are also multiplied by 'k', but Variance is multiplied by 'k²'. If 'k' is added to every observation, Mean increases by 'k', but SD and Variance remain UNCHANGED."
            }
        ]
    },
    stat_moments: {
        category: "Math: Statistics (Tier 2)",
        title: "Moments, Skewness & Kurtosis: Massive Deep Dive",
        subtitle: "Shape of the Distribution",
        blocks: [
            {
                title: "1. Skewness (Asymmetry)",
                text: "Measures the lack of symmetry in a data distribution.",
                examples: [
                    "Symmetrical (Normal): Mean = Median = Mode. Skewness is 0.",
                    "Positively Skewed (Right-tailed): Mean > Median > Mode. Tail is longer on the right.",
                    "Negatively Skewed (Left-tailed): Mean < Median < Mode. Tail is longer on the left.",
                    "Karl Pearson's Coefficient of Skewness: Sₖ = (Mean - Mode) / Standard Deviation."
                ],
                shortcut: "If the Mean is the highest value, the data is Positively skewed. If the Mode is the highest value, it's Negatively skewed."
            },
            {
                title: "2. Kurtosis (Peakedness)",
                text: "Measures the 'tailedness' or peakedness of the distribution relative to a normal distribution.",
                examples: [
                    "Mesokurtic: Normal distribution. Kurtosis = 3.",
                    "Leptokurtic: Highly peaked, fat tails. Kurtosis > 3.",
                    "Platykurtic: Flat-topped, thin tails. Kurtosis < 3."
                ],
                shortcut: "Memory Trick: 'Lepto' = Leaping tall (high peak). 'Platy' = Plateau/Flat (low peak)."
            }
        ]
    },
    stat_probability: {
        category: "Math: Statistics (Tier 2)",
        title: "Probability & Distributions: Massive Deep Dive & Elimination Tricks",
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
                shortcut: "Bayes' Theorem updates the probability of an event based on new evidence: P(A|B) = [P(B|A)P(A)] / P(B). Always use a tree diagram for conditional probability! Probability can NEVER be > 1 or < 0. Eliminate those options instantly."
            },
            {
                title: "2. Standard Distributions",
                text: "Theoretical patterns of probabilities.",
                examples: [
                    "Binomial Distribution: Fixed number of independent yes/no trials. P(x) = ⁿCₓ(p)ˣ(q)ⁿ⁻ˣ. Mean = np, Variance = npq.",
                    "Poisson Distribution: Number of rare events in a fixed time/space. Mean = Variance = λ.",
                    "Normal Distribution: Bell-shaped curve, symmetrical around the mean. Total area under curve = 1."
                ],
                shortcut: "In a Normal Distribution, approx 68% of data falls within 1 standard deviation of the mean (μ±1σ), 95% within 2 (μ±2σ), and 99.7% within 3 (μ±3σ). For Poisson, Mean is ALWAYS exactly equal to Variance."
            }
        ]
    },
    stat_correlation: {
        category: "Math: Statistics (Tier 2)",
        title: "Correlation & Regression: Massive Deep Dive",
        subtitle: "Relationships between Variables",
        blocks: [
            {
                title: "1. Correlation Coefficient (r)",
                text: "Measures the strength and direction of a linear relationship.",
                examples: [
                    "r = +1: Perfect positive correlation.",
                    "r = -1: Perfect negative correlation.",
                    "r = 0: No linear correlation.",
                    "Karl Pearson's r: Covariance(x,y) / (σx × σy)."
                ],
                shortcut: "Correlation coefficient (r) ALWAYS lies strictly between -1 and +1 inclusive. If an option is 1.5 or -2.3, eliminate it immediately."
            },
            {
                title: "2. Regression Analysis",
                text: "Predicting the value of one variable based on another.",
                examples: [
                    "Regression lines intersect at the point (Mean of X, Mean of Y).",
                    "Regression coefficients: bxy and byx.",
                    "Relation with correlation: r = ±√(bxy × byx)."
                ],
                shortcut: "The sign of 'r' is always the SAME as the signs of the regression coefficients. If bxy and byx are both negative, 'r' MUST be negative."
            }
        ]
    },
    stat_inference: {
        category: "Math: Statistics (Tier 2)",
        title: "Sampling & Hypothesis Testing: Massive Deep Dive",
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
    },
    stat_index: {
        category: "Math: Statistics (Tier 2)",
        title: "Index Numbers & Time Series: Massive Deep Dive",
        subtitle: "Inflation and Trend Analysis",
        blocks: [
            {
                title: "1. Index Numbers",
                text: "Measures changes in a variable (like price) over time.",
                examples: [
                    "Laspeyres' Index: Uses Base Year quantities as weights.",
                    "Paasche's Index: Uses Current Year quantities as weights.",
                    "Fisher's Ideal Index: Geometric mean of Laspeyres and Paasche. √[L × P]."
                ],
                shortcut: "Fisher's index is called 'Ideal' because it satisfies both the Time Reversal Test and the Factor Reversal Test."
            }
        ]
    }
};
