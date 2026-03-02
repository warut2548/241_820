const submitData = async () => {
    let messageDOM = document.getElementById('message');
    
    let firstnameDOM = document.querySelector('input[name=firstname]')
    let lastnameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')
    let genderDOM = document.querySelector('input[name=gender]:checked')
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked')
    let descriptionDOM = document.querySelector('textarea[name=description]')

    let errors = [];
    if (!firstnameDOM.value) errors.push('กรุณากรอกชื่อ');
    if (!lastnameDOM.value) errors.push('กรุณากรอกนามสกุล');
    if (!ageDOM.value) errors.push('กรุณากรอกอายุ');
    if (!genderDOM) errors.push('กรุณาเลือกเพศ');

    if (errors.length > 0) {
        messageDOM.innerText = errors.join(' / ');
        messageDOM.className = 'message danger';
        return;
    }

    let interest = ''
    for (let i = 0; i < interestDOMs.length; i++) {
        interest += interestDOMs[i].value
        if (i != interestDOMs.length - 1) {
            interest += ','
        }
    }

    let userData = {
        firstname: firstnameDOM.value,
        lastname: lastnameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interests: interest
    }

    console.log('ข้อมูลที่จะส่ง:', userData)

    try {
        const response = await axios.post('http://localhost:8000/users', userData);
        
        messageDOM.innerText = 'บันทึกข้อมูลเรียบร้อยแล้ว!';
        messageDOM.className = 'message success';
        console.log('Response:', response.data);

    } catch (error) {
        
        console.error('เกิดข้อผิดพลาด:', error);
        messageDOM.innerText = 'ส่งข้อมูลไม่สำเร็จ: ตรวจสอบการเชื่อมต่อ Server (localhost:8000)';
        messageDOM.className = 'message danger';
    }
}