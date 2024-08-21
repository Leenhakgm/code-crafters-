const subjectsData = {
    1: [
        { code: '23MA101T', name: 'Matrices and Calculus', credits: 4 },
        { code: '23CH101T', name: 'Engineering Chemistry', credits: 3 },
        { code: '23EN101T', name: 'Communicative English', credits: 3 },
        { code: '23PH101T', name: 'Engineering Physics', credits: 3 },
        { code: '23CS101T', name: 'Problem Solving and Python Programming', credits: 3 },
        { code: '23GE101T', name: 'தமிழர் மரபு / Heritage of Tamils', credits: 1 },
        { code: '23BS102L', name: 'Physics and Chemistry Laboratory', credits: 2 },
        { code: '23CS102L', name: 'Problem Solving and Python Programming Laboratory', credits: 2 },
        { code: '23EN102L', name: 'Communicative English Laboratory', credits: 1 }
    ],
    2: [
        { code: '23EN103T', name: 'Technical English', credits: 3 },
        { code: '23MA102T', name: 'Statistics and Numerical Method', credits: 4 },
        { code: '23PH105T', name: 'Physics for Computer Science Engineers', credits: 3 },
        { code: '23ME101T', name: 'Engineering Graphics', credits: 4 },
        { code: '23CS103T', name: 'Programming in C', credits: 3 },
        { code: '23GE102T', name: 'தமிழரும்  தொழில்நுட்பமும் / Tamils and Technology', credits: 1 },
        { code: '23CH102T', name: 'Environmental Science and Sustainability', credits: 2 },
        { code: '23NCC101/23NCC102', name: 'NCC credit course level 1', credits: 2 },
        { code: '23EN104L', name: 'Technical English Laboratory', credits: 1 },
        { code: '23ME102L', name: 'Engineering Practices Laboratory', credits: 2 },
        { code: '23CS104L', name: 'Programming in C Laboratory', credits: 2 }
    ],
    3: [
        { code: '23MA201T', name: 'Discrete Mathematics', credits: 4 },
        { code: '23CS201T', name: 'Digital Principles and Computer Organization', credits: 4 },
        { code: '23AD201T', name: 'Object Oriented Programming using C++ and Java', credits: 3 },
        { code: '23CY201T', name: 'Data Structures and Algorithms', credits: 3 },
        { code: '23AD208T', name: 'Foundations of Data Science', credits: 3 },
        { code: '23CY202L', name: 'Data Structures and Algorithms Laboratory', credits: 2 },
        { code: '23AD203L', name: 'Object Oriented Programming using C++ Laboratory', credits: 2 },
        { code: '23AD209L', name: 'Data Science Laboratory', credits: 2 },
        { code: '23TP201L', name: 'Quantitative Aptitude & Verbal Reasoning', credits: 1 }
    ],
    4: [
        { code: '23MA207T', name: 'Probability and Statistics', credits: 4 },
        { code: '23CY203T', name: 'Theory of Computation', credits: 3 },
        { code: '23CY204T', name: 'Engineering Secure Software System', credits: 3 },
        { code: '23CY205T', name: 'Database Management System and Security', credits: 3 },
        { code: '23CY206T', name: 'Operating System and Security', credits: 3 },
        { code: '23CY207T', name: 'Network Essential', credits: 4 },
        { code: '23NCC201/23NCC202', name: 'NCC Credit Course Level 2', credits: 3 },
        { code: '23CY208L', name: 'Database Management System and Security Laboratory', credits: 2 },
        { code: '23TP202L', name: 'Operating System and Security Laboratory', credits: 2 },
        { code: '-', name: 'Quantitative Aptitude and Behavioural Skills', credits: 1 }
    ],
    5: [
        { code: '23CY301T', name: 'Distributed System', credits: 3 },
        { code: '23CY302T', name: 'Cyber Law', credits: 3 },
        { code: '23CY303T', name: 'Cyber Forensics', credits: 3 },
        { code: '-', name: 'Mandatory Course', credits: 0 },
        { code: '-', name: 'Open Elective I', credits: 3 },
        { code: '23CY304T', name: 'Cryptography and Cyber Security', credits: 4 },
        { code: '-', name: 'Professional Elective I', credits: 3 },
        { code: '23CY305L', name: 'Security Laboratory', credits: 2 },
        { code: '23TP301L', name: 'Quantitative Aptitude and Communication Skills', credits: 1 }
    ],
    6: [
        { code: '23AD304T', name: 'Internet of Things', credits: 3 },
        { code: '-', name: 'Open Elective II', credits: 3 },
        { code: '-', name: 'Mandatory Course II', credits: 0 },
        { code: '23NCC301/23NCC302', name: 'NCC Credit Course Level 3', credits: 3 },
        { code: '23AD307I', name: 'Artificial Intelligence and Machine Learning', credits: 4 },
        { code: '-', name: 'Professional Elective II', credits: 3 },
        { code: '-', name: 'Professional Elective III', credits: 3 },
        { code: '-', name: 'Professional Elective IV', credits: 3 },
        { code: '23CY306L', name: 'Mini Project', credits: 2 },
        { code: '23TP302L', name: 'Quantitative Aptitude and Soft Skills', credits: 1 }
    ],
    7: [
        { code: '23MS401T', name: 'Human Value and Ethics', credits: 2 },
        { code: '-', name: 'Elective Management', credits: 3 },
        { code: '-', name: 'Open Elective III', credits: 3 },
        { code: '-', name: 'Professional Elective V', credits: 3 },
        { code: '-', name: 'Professional Elective VI', credits: 3 },
        { code: '23CY401', name: 'Internship', credits: 1 }
    ],
    8: [
        { code: '23CY402', name: 'Project Work', credits: 10 }
    ]
};
function createSemesterTable(semesterNum) {
    const subjects = subjectsData[semesterNum];
    if (!subjects) return '';

    let rows = subjects.map(subject => `
        <tr>
            <td>${subject.code}</td>
            <td>${subject.name}</td>
            <td>${subject.credits}</td>
            <td>
                <select class="grade-dropdown">
                    <option value="">Select Grade</option>
                    <option value="O">O</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="U">U</option>
                    ${subject.code.startsWith('23NCC') ? '<option value="N/A">N/A</option>' : ''}
                </select>
            </td>
        </tr>
    `).join('');

    return `
        <div class="section">
            <h2>Semester ${semesterNum}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Subject Code</th>
                        <th>Subject Name</th>
                        <th>Credits</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody id="semester${semesterNum}Subjects">
                    ${rows}
                </tbody>
            </table>
            <p id="semester${semesterNum}GPA" class="gpa-display">GPA: Not calculated yet</p>
        </div>
    `;
}

function calculateCGPA() {
    let totalCredits = 0;
    let weightedGradesSum = 0;
    let hasAnyUGrade = false;
    let errorMessages = [];

    for (let i = 1; i <= parseInt(document.getElementById('numSemesters').value, 10); i++) {
        let semesterCredits = 0;
        let semesterWeightedGradesSum = 0;
        const rows = document.querySelectorAll(`#semester${i}Subjects tr`);

        rows.forEach(row => {
            const credits = parseFloat(row.cells[2].innerText);
            const grade = row.cells[3].querySelector('select')?.value || '';

            if (credits > 0 && (grade === undefined || grade === '')) {
                errorMessages.push(`Grade not entered for ${row.cells[0].innerText} (${row.cells[1].innerText})`);
            }

            if (grade === 'U') {
                hasAnyUGrade = true; // Mark that there's a U grade
            }

            if (grade !== 'N/A' && credits > 0 && grade !== '') {
                const gradePoints = getGradePoints(grade);
                semesterCredits += credits;
                semesterWeightedGradesSum += credits * gradePoints;
            }
        });

        if (semesterCredits > 0) {
            const semesterGPA = (semesterWeightedGradesSum / semesterCredits).toFixed(4);
            document.getElementById(`semester${i}GPA`).innerText = `GPA: ${semesterGPA}`;
            totalCredits += semesterCredits;
            weightedGradesSum += semesterWeightedGradesSum;
        }
    }

    if (errorMessages.length > 0) {
        document.getElementById('result').innerText = errorMessages.join('\n');
        document.getElementById('result').classList.add('error-message');
        return;
    }

    // Set CGPA to 0 if any 'U' grade is present
    const cgpa = hasAnyUGrade ? 0.00 : (weightedGradesSum / totalCredits).toFixed(4);
    document.getElementById('result').innerText = `CGPA: ${cgpa}`;
    document.getElementById('result').style.color = hasAnyUGrade ? 'red' : '#357ABD'; // Red if failed, blue otherwise
    document.getElementById('result').classList.remove('error-message');
}

function getGradePoints(grade) {
    const gradePoints = {
        'O': 10,
        'A+': 9,
        'A': 8,
        'B+': 7,
        'B': 6,
        'C': 5,
        'U': 0 // Fail grade
    };
    return gradePoints[grade] || 0;
}

function updateSemesterTables() {
    const numSemesters = parseInt(document.getElementById('numSemesters').value, 10);
    
    if (isNaN(numSemesters) || numSemesters < 1) {
        document.getElementById('result').innerText = 'Invalid number of semesters.';
        document.getElementById('result').classList.add('error-message');
        return;
    }

    let html = '';
    for (let i = 1; i <= numSemesters; i++) {
        html += createSemesterTable(i);
    }

    document.getElementById('semesterSections').innerHTML = html;
    document.getElementById('result').innerText = ''; // Clear previous results or errors
    document.getElementById('result').classList.remove('error-message');
}

document.getElementById('numSemesters').addEventListener('input', updateSemesterTables);

updateSemesterTables();


function getGradePoints(grade) {
    const gradePoints = {
        'O': 10,
        'A+': 9,
        'A': 8,
        'B+': 7,
        'B': 6,
        'C': 5,
        'U': 0 // Fail grade
    };
    return gradePoints[grade] || 0;
}


function getGradePoints(grade) {
    const gradePoints = {
        'O': 10,
        'A+': 9,
        'A': 8,
        'B+': 7,
        'B': 6,
        'C': 5,
        'U': 0 // Fail grade, GPA should be 0 if 'U' is present
    };
    return gradePoints[grade] || 0;
}


function gradeToPoints(grade) {
    switch (grade?.toUpperCase()) {
        case 'O': return 10.0;
        case 'A+': return 9.0;
        case 'A': return 8.0;
        case 'B+': return 7.0;
        case 'B': return 6.0;
        case 'C': return 5.0;
        case 'U': return 0.0;
        default: return NaN;
    }
}

function updateSemesterTables() {
    const numSemesters = parseInt(document.getElementById('numSemesters').value, 10);
    
    if (isNaN(numSemesters) || numSemesters < 1) {
        document.getElementById('result').innerText = 'Invalid number of semesters.';
        document.getElementById('result').classList.add('error-message');
        return;
    }

    let html = '';
    for (let i = 1; i <= numSemesters; i++) {
        html += createSemesterTable(i);
    }

    document.getElementById('semesterSections').innerHTML = html;
    document.getElementById('result').innerText = ''; // Clear previous results or errors
    document.getElementById('result').classList.remove('error-message');
}

// Initial setup
document.getElementById('numSemesters').addEventListener('input', updateSemesterTables);

// Initial table setup
updateSemesterTables();
