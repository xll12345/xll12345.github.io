// JavaScript 部分 (script.js)
function checkAnswers() {
    const correctAnswers = {
        q1: "a",
        q2: "c",
        q3: "b",
        q4: "b",
        q5: ["a", "b", "c"],
        q6: "a",
        q7: "b",
        q8: ["a", "b", "c", "d"],
        q9: "b",
        q10: "d",
        q11: "b",
        q12: ["a", "b", "c"],
        q13: "c",
        q14: "c",
        q15: "c"
    };

    let score = 0;
    let totalQuestions = 15;
    let feedback = "<h3>测试结果</h3>";

    // 检查所有题目
    for (let i = 1; i <= 15; i++) {
        const questionType = document.querySelector(`input[name="q${i}"]`).type;
        
        if (questionType === "checkbox") {
            const selected = [];
            document.querySelectorAll(`input[name="q${i}"]:checked`).forEach(box => {
                selected.push(box.value);
            });
            const correct = JSON.stringify(selected.sort()) === JSON.stringify(correctAnswers[`q${i}`].sort());
            feedback += getFeedback(i, correct, correctAnswers[`q${i}`], true);
            if (correct) score++;
        } else {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            const correct = selected && selected.value === correctAnswers[`q${i}`];
            feedback += getFeedback(i, correct, correctAnswers[`q${i}`]);
            if (correct) score++;
        }
    }

    // 显示结果
    const percentage = Math.round((score / totalQuestions) * 100);
    feedback += `<p><strong>得分: ${score}/${totalQuestions} (${percentage}%)</strong></p>`;
    
    // 添加结果评语
    feedback += getResultComment(percentage);
    
    document.getElementById("results").innerHTML = feedback;
    document.getElementById("results").style.display = "block";
    document.getElementById("results").scrollIntoView({ behavior: 'smooth' });
}

function getFeedback(qNum, isCorrect, correctAns, isMultiple = false) {
    if (isCorrect) {
        return `<p>第${qNum}题: 正确 ✓</p>`;
    } else {
        if (isMultiple) {
            const letters = correctAns.map(a => String.fromCharCode(97 + a.charCodeAt(0) - 97)).join("、");
            return `<p>第${qNum}题: 错误 ✗ (正确答案: ${letters})</p>`;
        } else {
            const letter = String.fromCharCode(97 + correctAns.charCodeAt(0) - 97);
            return `<p>第${qNum}题: 错误 ✗ (正确答案: ${letter})</p>`;
        }
    }
}

function getResultComment(percentage) {
    if (percentage >= 90) {
        return "<p>优秀！你对五卅运动有深入的了解！</p>";
    } else if (percentage >= 70) {
        return "<p>良好，建议再复习下历史细节</p>";
    } else {
        return "<p>需要加强学习，建议重新查看时间轴内容</p>";
    }
}

// 初始化代码
document.addEventListener('DOMContentLoaded', function() {
    // 可以添加页面加载时的初始化逻辑
    document.querySelector('button').addEventListener('click', checkAnswers);
});