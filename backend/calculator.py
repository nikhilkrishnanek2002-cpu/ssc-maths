import math
from collections import Counter

class MathsCalculator:
    """Core mathematical calculations for SSC Maths"""
    
    # ===================== HCF & LCM =====================
    
    def hcf(self, a, b):
        """Calculate HCF using Euclidean algorithm"""
        while b:
            a, b = b, a % b
        return a
    
    def lcm(self, a, b):
        """Calculate LCM using HCF"""
        return (a * b) // self.hcf(a, b)
    
    def hcf_steps(self, a, b):
        """Return HCF calculation steps"""
        steps = []
        orig_a, orig_b = a, b
        
        while b:
            q = a // b
            r = a % b
            steps.append(f"{a} = {b} × {q} + {r}")
            a, b = b, r
        
        return {'steps': steps, 'result': a}
    
    # ===================== PERCENTAGE & RATIO =====================
    
    def percentage_of(self, value, percent):
        """Calculate percentage of a value"""
        return (value * percent) / 100
    
    def percent_change(self, old, new):
        """Calculate percentage change"""
        if old == 0:
            return 0
        return ((new - old) / old) * 100
    
    def successive_percentage(self, p1, p2):
        """Calculate successive percentage change"""
        return p1 + p2 + (p1 * p2 / 100)
    
    def ratio_fourth_proportional(self, a, b, c):
        """Find fourth proportional: a:b = c:d => d = (b*c)/a"""
        return (b * c) / a
    
    # ===================== PROFIT & LOSS =====================
    
    def profit_loss_calc(self, cp, sp):
        """Calculate profit/loss amount and percentage"""
        pl_amount = sp - cp
        pl_percent = (pl_amount / cp) * 100
        return {
            'amount': pl_amount,
            'percent': pl_percent,
            'type': 'Profit' if pl_amount > 0 else 'Loss'
        }
    
    def dishonest_trader(self, false_weight, true_weight=1000):
        """Calculate profit % of dishonest trader"""
        profit_percent = ((true_weight - false_weight) / false_weight) * 100
        return profit_percent
    
    # ===================== INTEREST =====================
    
    def simple_interest(self, principal, rate, time):
        """Calculate Simple Interest"""
        si = (principal * rate * time) / 100
        return {
            'si': si,
            'amount': principal + si
        }
    
    def compound_interest(self, principal, rate, time, frequency=1):
        """Calculate Compound Interest
        frequency: 1=annual, 2=half-yearly, 4=quarterly, 12=monthly
        """
        amount = principal * ((1 + rate / (100 * frequency)) ** (frequency * time))
        ci = amount - principal
        return {
            'amount': amount,
            'ci': ci
        }
    
    # ===================== TIME & WORK =====================
    
    def time_work_together(self, days_a, days_b):
        """Calculate days needed when A and B work together"""
        return (days_a * days_b) / (days_a + days_b)
    
    def work_per_day(self, days):
        """Calculate work done per day"""
        return 1 / days
    
    # ===================== SPEED & DISTANCE =====================
    
    def kmh_to_ms(self, kmh):
        """Convert km/h to m/s"""
        return kmh * 5 / 18
    
    def ms_to_kmh(self, ms):
        """Convert m/s to km/h"""
        return ms * 18 / 5
    
    def average_speed_same_distance(self, speed1, speed2):
        """Harmonic mean - average speed for same distance"""
        return (2 * speed1 * speed2) / (speed1 + speed2)
    
    def average_speed_same_time(self, speed1, speed2):
        """Arithmetic mean - average speed for same time"""
        return (speed1 + speed2) / 2
    
    def relative_speed(self, s1, s2, opposite=True):
        """Calculate relative speed"""
        if opposite:
            return s1 + s2
        else:
            return abs(s1 - s2)
    
    # ===================== TRIGONOMETRY =====================
    
    def trig_standard_values(self):
        """Return standard trigonometric values"""
        return {
            0: {'sin': 0, 'cos': 1, 'tan': 0},
            30: {'sin': 0.5, 'cos': math.sqrt(3)/2, 'tan': 1/math.sqrt(3)},
            45: {'sin': 1/math.sqrt(2), 'cos': 1/math.sqrt(2), 'tan': 1},
            60: {'sin': math.sqrt(3)/2, 'cos': 0.5, 'tan': math.sqrt(3)},
            90: {'sin': 1, 'cos': 0, 'tan': float('inf')}
        }
    
    # ===================== GEOMETRY =====================
    
    def circle_area(self, radius):
        """Calculate circle area"""
        return math.pi * radius ** 2
    
    def circle_circumference(self, radius):
        """Calculate circle circumference"""
        return 2 * math.pi * radius
    
    def triangle_area_heron(self, a, b, c):
        """Calculate triangle area using Heron's formula"""
        s = (a + b + c) / 2
        return math.sqrt(s * (s - a) * (s - b) * (s - c))
    
    def rectangle_area(self, length, breadth):
        """Calculate rectangle area"""
        return length * breadth
    
    def rectangle_perimeter(self, length, breadth):
        """Calculate rectangle perimeter"""
        return 2 * (length + breadth)
    
    def pythagorean_triplet(self, a, b):
        """Find hypotenuse using Pythagorean theorem"""
        return math.sqrt(a**2 + b**2)
    
    # ===================== STATISTICS =====================
    
    def mean(self, numbers):
        """Calculate arithmetic mean"""
        return sum(numbers) / len(numbers)
    
    def median(self, numbers):
        """Calculate median"""
        sorted_nums = sorted(numbers)
        n = len(sorted_nums)
        if n % 2 == 0:
            return (sorted_nums[n//2 - 1] + sorted_nums[n//2]) / 2
        else:
            return sorted_nums[n//2]
    
    def mode(self, numbers):
        """Calculate mode"""
        freq = Counter(numbers)
        return freq.most_common(1)[0][0]
    
    def std_deviation(self, numbers):
        """Calculate standard deviation"""
        mean_val = self.mean(numbers)
        variance = sum((x - mean_val)**2 for x in numbers) / len(numbers)
        return math.sqrt(variance)
    
    # ===================== AP/GP =====================
    
    def ap_nth_term(self, first_term, common_diff, n):
        """Calculate nth term of AP"""
        return first_term + (n - 1) * common_diff
    
    def ap_sum(self, first_term, common_diff, n):
        """Calculate sum of n terms of AP"""
        nth_term = self.ap_nth_term(first_term, common_diff, n)
        return (n / 2) * (first_term + nth_term)
    
    def gp_nth_term(self, first_term, common_ratio, n):
        """Calculate nth term of GP"""
        return first_term * (common_ratio ** (n - 1))
    
    def gp_sum(self, first_term, common_ratio, n):
        """Calculate sum of n terms of GP"""
        if common_ratio == 1:
            return first_term * n
        return first_term * (common_ratio**n - 1) / (common_ratio - 1)
    
    def gp_infinite_sum(self, first_term, common_ratio):
        """Calculate sum of infinite GP (|r| < 1)"""
        if abs(common_ratio) >= 1:
            return float('inf')
        return first_term / (1 - common_ratio)
    
    # ===================== FRACTIONS & SIMPLIFICATION =====================
    
    def gcd(self, a, b):
        """Calculate GCD (same as HCF)"""
        return self.hcf(a, b)
    
    def simplify_fraction(self, numerator, denominator):
        """Simplify a fraction"""
        gcd_val = self.gcd(numerator, denominator)
        return numerator // gcd_val, denominator // gcd_val
    
    def fraction_to_decimal(self, numerator, denominator):
        """Convert fraction to decimal"""
        return numerator / denominator
