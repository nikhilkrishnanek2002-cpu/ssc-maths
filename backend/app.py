from flask import Flask, request, jsonify
from flask_cors import CORS
import math
from calculator import MathsCalculator

app = Flask(__name__)
CORS(app)
calc = MathsCalculator()

# ===================== CALCULATOR ROUTES =====================

@app.route('/api/calculate', methods=['POST'])
def calculate():
    """Execute mathematical calculations"""
    try:
        data = request.json
        operation = data.get('operation')
        params = data.get('params', {})
        
        result = getattr(calc, operation)(**params)
        return jsonify({'success': True, 'result': result, 'operation': operation})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# ===================== HCF/LCM =====================

@app.route('/api/hcf', methods=['POST'])
def get_hcf():
    """Calculate HCF (GCD) of two numbers"""
    try:
        data = request.json
        a, b = data['a'], data['b']
        result = calc.hcf(a, b)
        steps = calc.hcf_steps(a, b)
        return jsonify({'success': True, 'hcf': result, 'steps': steps})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/api/lcm', methods=['POST'])
def get_lcm():
    """Calculate LCM of two numbers"""
    try:
        data = request.json
        a, b = data['a'], data['b']
        result = calc.lcm(a, b)
        return jsonify({'success': True, 'lcm': result})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# ===================== PERCENTAGE & RATIO =====================

@app.route('/api/percentage', methods=['POST'])
def calculate_percentage():
    """Calculate percentage"""
    try:
        data = request.json
        value = data['value']
        percent = data['percent']
        result = (value * percent) / 100
        return jsonify({'success': True, 'result': result, 'calculation': f'{percent}% of {value}'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/api/ratio-proportion', methods=['POST'])
def ratio_proportion():
    """Solve ratio and proportion problems"""
    try:
        data = request.json
        a, b, c = data['a'], data['b'], data['c']
        # a:b = c:x => x = (b*c)/a
        d = (b * c) / a
        return jsonify({'success': True, 'result': d, 'formula': f'{a}:{b} = {c}:{d}'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# ===================== PROFIT & LOSS =====================

@app.route('/api/profit-loss', methods=['POST'])
def profit_loss():
    """Calculate profit/loss"""
    try:
        data = request.json
        cp = data.get('cp')  # Cost Price
        sp = data.get('sp')  # Selling Price
        
        if cp and sp:
            profit_loss_amount = sp - cp
            percent = (profit_loss_amount / cp) * 100
            ptype = 'Profit' if profit_loss_amount > 0 else 'Loss'
            return jsonify({
                'success': True, 
                'amount': abs(profit_loss_amount),
                'type': ptype,
                'percent': abs(percent)
            })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# ===================== INTEREST =====================

@app.route('/api/simple-interest', methods=['POST'])
def simple_interest():
    """Calculate Simple Interest"""
    try:
        data = request.json
        p = data['principal']  # Principal
        r = data['rate']       # Rate per annum
        t = data['time']       # Time in years
        
        si = (p * r * t) / 100
        amount = p + si
        
        return jsonify({
            'success': True,
            'principal': p,
            'rate': r,
            'time': t,
            'si': si,
            'amount': amount
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/api/compound-interest', methods=['POST'])
def compound_interest():
    """Calculate Compound Interest"""
    try:
        data = request.json
        p = data['principal']
        r = data['rate']
        t = data['time']
        n = data.get('frequency', 1)  # compounds per year (1=annually, 4=quarterly, 12=monthly)
        
        amount = p * ((1 + r/(100*n)) ** (n*t))
        ci = amount - p
        
        return jsonify({
            'success': True,
            'principal': p,
            'rate': r,
            'time': t,
            'amount': round(amount, 2),
            'ci': round(ci, 2)
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# ===================== SPEED & DISTANCE =====================

@app.route('/api/speed-distance-time', methods=['POST'])
def speed_distance_time():
    """Calculate speed, distance, or time"""
    try:
        data = request.json
        speed = data.get('speed')
        distance = data.get('distance')
        time = data.get('time')
        
        if speed and distance:
            result_time = distance / speed
            return jsonify({'success': True, 'value': result_time, 'unit': 'hours', 'found': 'time'})
        elif speed and time:
            result_distance = speed * time
            return jsonify({'success': True, 'value': result_distance, 'unit': 'km', 'found': 'distance'})
        elif distance and time:
            result_speed = distance / time
            return jsonify({'success': True, 'value': result_speed, 'unit': 'km/h', 'found': 'speed'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/api/relative-speed', methods=['POST'])
def relative_speed():
    """Calculate relative speed"""
    try:
        data = request.json
        s1 = data['speed1']
        s2 = data['speed2']
        direction = data.get('direction', 'opposite')  # opposite or same
        
        if direction == 'opposite':
            rel_speed = s1 + s2
        else:
            rel_speed = abs(s1 - s2)
        
        return jsonify({'success': True, 'relative_speed': rel_speed, 'direction': direction})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# ===================== TIME & WORK =====================

@app.route('/api/time-work', methods=['POST'])
def time_work():
    """Calculate time and work problems"""
    try:
        data = request.json
        a_days = data.get('a_days')  # Days for A to complete
        b_days = data.get('b_days')  # Days for B to complete
        
        # Work per day: A does 1/a_days, B does 1/b_days
        # Together: 1/a_days + 1/b_days
        if a_days and b_days:
            together_days = (a_days * b_days) / (a_days + b_days)
            return jsonify({
                'success': True,
                'a_work_per_day': 1/a_days,
                'b_work_per_day': 1/b_days,
                'together_days': round(together_days, 2)
            })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# ===================== TRIGONOMETRY =====================

@app.route('/api/trig-values', methods=['GET'])
def trig_values():
    """Get trigonometric values for standard angles"""
    values = {
        '0°': {'sin': 0, 'cos': 1, 'tan': 0},
        '30°': {'sin': 0.5, 'cos': 0.866, 'tan': 0.577},
        '45°': {'sin': 0.707, 'cos': 0.707, 'tan': 1},
        '60°': {'sin': 0.866, 'cos': 0.5, 'tan': 1.732},
        '90°': {'sin': 1, 'cos': 0, 'tan': float('inf')}
    }
    return jsonify({'success': True, 'values': values})

@app.route('/api/height-distance', methods=['POST'])
def height_distance():
    """Calculate height/distance from angle of elevation"""
    try:
        data = request.json
        angle_deg = data['angle']
        known_value = data['known_value']
        known_type = data['known_type']  # 'height' or 'distance'
        
        angle_rad = math.radians(angle_deg)
        
        if known_type == 'height':
            # tan(angle) = height/distance => distance = height/tan(angle)
            distance = known_value / math.tan(angle_rad)
            return jsonify({'success': True, 'distance': round(distance, 2)})
        else:
            # distance known => height = distance * tan(angle)
            height = known_value * math.tan(angle_rad)
            return jsonify({'success': True, 'height': round(height, 2)})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# ===================== GEOMETRY =====================

@app.route('/api/area-perimeter', methods=['POST'])
def area_perimeter():
    """Calculate area and perimeter"""
    try:
        data = request.json
        shape = data['shape']
        
        if shape == 'circle':
            r = data['radius']
            area = math.pi * r ** 2
            perimeter = 2 * math.pi * r
            
        elif shape == 'rectangle':
            l, b = data['length'], data['breadth']
            area = l * b
            perimeter = 2 * (l + b)
            
        elif shape == 'triangle':
            # Heron's formula
            a, b, c = data['a'], data['b'], data['c']
            s = (a + b + c) / 2
            area = math.sqrt(s * (s - a) * (s - b) * (s - c))
            perimeter = a + b + c
        
        return jsonify({'success': True, 'area': round(area, 2), 'perimeter': round(perimeter, 2)})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

# ===================== STATISTICS =====================

@app.route('/api/statistics', methods=['POST'])
def statistics():
    """Calculate mean, median, mode"""
    try:
        data = request.json
        numbers = data['numbers']
        
        # Mean
        mean = sum(numbers) / len(numbers)
        
        # Median
        sorted_nums = sorted(numbers)
        n = len(sorted_nums)
        if n % 2 == 0:
            median = (sorted_nums[n//2 - 1] + sorted_nums[n//2]) / 2
        else:
            median = sorted_nums[n//2]
        
        # Mode
        from collections import Counter
        freq = Counter(numbers)
        mode = freq.most_common(1)[0][0]
        
        return jsonify({
            'success': True,
            'mean': round(mean, 2),
            'median': median,
            'mode': mode
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'service': 'SSC Maths Backend'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
