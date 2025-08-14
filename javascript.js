document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  function handleSearch() {
    const searchValue = searchInput.value.trim().toLowerCase();

    // Check for "home"
    if (searchValue === 'home') {
      window.location.href = 'index.html';
    } 
    // Check for "health"
    
    else if (searchValue === 'health') {
      window.location.href = 'health.html';
    } 
    else if (searchValue === 'wellness') {
      window.location.href = 'health.html';
    } 
    else if (searchValue === 'สุขภาพ') {
      window.location.href = 'health.html';
    } 
    else if (searchValue === 'health and wellness') {
      window.location.href = 'health.html';
    }
    else if (searchValue === 'ความเป็นอยู่') {
      window.location.href = 'health.html';
    }


    else if (searchValue === 'nutrition') {
      window.location.href = 'Nutrition.html';
    } 
    else if (searchValue === 'cooking') {
      window.location.href = 'Nutrition.html';
    }
    else if (searchValue === 'nutrition and cooking') {
      window.location.href = 'Nutrition.html';
    }
    else if (searchValue === 'อาหาร') {
      window.location.href = 'Nutrition.html';
    }
    else if (searchValue === 'ทำอาหาร') {
      window.location.href = 'Nutrition.html';
    }
    else if (searchValue === 'โภชนาการ') {
      window.location.href = 'Nutrition.html';
    }

    else if (searchValue === 'exercise') {
      window.location.href = 'physical.html';
    }    
    else if (searchValue === 'physical') {
      window.location.href = 'physical.html';
    }  
    else if (searchValue === 'exercise and physical') {
      window.location.href = 'physical.html';
    } 
    else if (searchValue === 'ออกกำลังกาย') {
      window.location.href = 'physical.html';
    }  


    else if (searchValue === 'about us') {
      window.location.href = 'about us.html';
    } 
    else if (searchValue === 'about') {
      window.location.href = 'about us.html';
    } 


    else if (searchValue === 'question') {
      window.location.href = 'question.html';
    } 
    else if (searchValue === 'คำถาม') {
      window.location.href = 'question.html';
    } 

    
    else if (searchValue === 'contact us') {
      window.location.href = 'contact us.html';
    } 
    else if (searchValue === 'contact') {
      window.location.href = 'contact us.html';
    } 
    else if (searchValue === 'ติดต่อ') {
      window.location.href = 'contact us.html';
    } 

 /*Health and welness */

    else if (searchValue === 'การพลิกตัว') {
      window.location.href = 'bodyroll.html';
    } 
    else if (searchValue === 'พลิกตัว') {
      window.location.href = 'bodyroll.html';
    } 
    else if (searchValue === 'พลิก') {
      window.location.href = 'bodyroll.html';
    } 
    else if (searchValue === 'การเช็ดตัว') {
      window.location.href = 'bodyclean.html';
    } 
    else if (searchValue === 'เช็ดตัว') {
      window.location.href = 'bodyclean.html';
    } 
    else if (searchValue === 'การป้องกันเเผลกดทับ') {
      window.location.href = 'bodycure.html';
    } 
    else if (searchValue === 'ป้องกันเเผลกดทับ') {
      window.location.href = 'bodycure.html';
    } 
    else if (searchValue === 'เเผลกดทับ') {
      window.location.href = 'bodycure.html';
    } 
    else if (searchValue === 'สุขภาพจิต') {
      window.location.href = 'mentalh.html';
    } 
    else if (searchValue === 'mental') {
      window.location.href = 'mentalh.html';
    } 
    else if (searchValue === 'mental health') {
      window.location.href = 'mentalh.html';
    } 
    else if (searchValue === 'การดูเเลจิตใจผู้สูงอายุ') {
      window.location.href = 'elder.html';
    } 
    else if (searchValue === 'ดูเเลจิตใจผู้สูงอายุ') {
      window.location.href = 'elder.html';
    } 
    else if (searchValue === 'จิตใจผู้สูงอายุ') {
      window.location.href = 'elder.html';
    } 
    else if (searchValue === 'การดูเเลจิตใจผู้ช่วยผู้สูงอายุ') {
      window.location.href = 'helper.html';
    } 
    else if (searchValue === 'การดูเเลจิตใจผู้ดูเเล') {
      window.location.href = 'helper.html';
    } 
    else if (searchValue === 'ดูเเลจิตใจผู้ดูเเล') {
      window.location.href = 'helper.html';
    } 
    else if (searchValue === 'หนังสือ') {
      window.location.href = 'helper.html';
    } 
    else if (searchValue === 'พอดแคสต์') {
      window.location.href = 'helper.html';
    } 
    else if (searchValue === 'podcast') {
      window.location.href = 'helper.html';
    } 
/*Nutrition and cooking */

    else if (searchValue === 'อาหาร') {
      window.location.href = 'cooking.html';
    } 
    else if (searchValue === 'เมนูอาหาร') {
      window.location.href = 'cooking.html';
    } 
    else if (searchValue === 'รายการอาหาร') {
      window.location.href = 'cooking.html';
    } 
    else if (searchValue === 'โจ๊กข้าวโอ๊ต') {
      window.location.href = 'joke.html';
    } 
    else if (searchValue === 'โจ๊ก') {
      window.location.href = 'joke.html';
    } 
    else if (searchValue === 'ข้าวโอ๊ต') {
      window.location.href = 'joke.html';
    } 
    else if (searchValue === 'ไข่ตุ๋นทรงเครื่อง') {
      window.location.href = 'kaitun.html';
    } 
    else if (searchValue === 'ไข่ตุ๋น') {
      window.location.href = 'kaitun.html';
    } 
    else if (searchValue === 'ข้าวต้มปลา') {
      window.location.href = 'boiled rice.html';
    } 
    else if (searchValue === 'ข้าวต้ม') {
      window.location.href = 'boiled rice.html';
    } 
    else if (searchValue === 'ไก่ตุ๋นมะนาวดอง') {
      window.location.href = 'kitun.html';
    } 
    else if (searchValue === 'ไก่ตุ๋น') {
      window.location.href = 'kitun.html';
    } 

/*physical */

    else if (searchValue === 'Exercises') {
      window.location.href = 'physical.html';
    } 
     else if (searchValue === 'ผู้ป่วยติดเตียง') {
      window.location.href = 'phytext12.html';
    }  
    else if (searchValue === 'ผุ้') {
      window.location.href = 'phytext12.html';
    } 
    else if (searchValue === 'Physical') {
      window.location.href = 'physical.html';
    } 
    else if (searchValue === 'exercises') {
      window.location.href = 'physical.html';
    } 
    else if (searchValue === 'physical') {
      window.location.href = 'physical.html';
    } 
    else if (searchValue === 'ออกกำลังกาย') {
      window.location.href = 'physical.html';
    } 
     else if (searchValue === 'การออกกำลังกาย') {
      window.location.href = 'physical.html';
    } 
     else if (searchValue === 'ออกกำลัง') {
      window.location.href = 'physical.html';
    } 
     else if (searchValue === 'ออก') {
      window.location.href = 'physical.html';
    } 
     else if (searchValue === 'กิจกรรม') {
      window.location.href = 'physical.html';
    } 
     else if (searchValue === 'ออกกำลังกายและกิจกรรม') {
      window.location.href = 'physical.html';
    } 
     else if (searchValue === 'บริหารร่างกาย') {
      window.location.href = 'physical.html';
    } 
    else if (searchValue === 'ท่ายืนย่ำเท้า') {
      window.location.href = 'phytext3.html';
    } 
    else if (searchValue === 'ยืนย่ำเท้า') {
      window.location.href = 'phytext3.html';
    } 
    else if (searchValue === 'ย่ำเท้า') {
      window.location.href = 'phytext3.html';
    } 
    else if (searchValue === 'ท่าย่ำเท้า') {
      window.location.href = 'phytext3.html';
    } 
    else if (searchValue === 'ท่างอศอก') {
      window.location.href = 'phytext4.html';
    } 
    else if (searchValue === 'งอศอก') {
      window.location.href = 'phytext4.html';
    } 
    else if (searchValue === 'งอ') {
      window.location.href = 'phytext4.html';
    } 
    else if (searchValue === 'ท่างอ') {
      window.location.href = 'phytext4.html';
    } 
    else if (searchValue === 'ศอก') {
      window.location.href = 'phytext4.html';
    } 
    else if (searchValue === 'ท่าศอก') {
      window.location.href = 'phytext4.html';
    } 
    else if (searchValue === 'ท่ายกแขนสูงระดับไหล่') {
      window.location.href = 'phytext5.html';
    } 
    else if (searchValue === 'ท่ายกแขน') {
      window.location.href = 'phytext5.html';
    } 
    else if (searchValue === 'ยกแขน') {
      window.location.href = 'phytext5.html';
    } 
    else if (searchValue === 'ท่าแขน') {
      window.location.href = 'phytext5.html';
    } 
    else if (searchValue === 'ท่า') {
      window.location.href = 'physical.html';
    } 
    else if (searchValue === 'ท่ายืนพับขาไปด้านหลัง') {
      window.location.href = 'phytext6.html';
    } 
    else if (searchValue === 'ท่ายืนพับขา') {
      window.location.href = 'phytext6.html';
    } 
    else if (searchValue === 'ยืนพับขา') {
      window.location.href = 'phytext6.html';
    } 
    else if (searchValue === 'พับขา') {
      window.location.href = 'phytext6.html';
    } 
    else if (searchValue === 'ท่ายืนกางขา') {
      window.location.href = 'phytext7.html';
    } 
    else if (searchValue === 'ยืนกางขา') {
      window.location.href = 'phytext7.html';
    } 
    else if (searchValue === 'กางขา') {
      window.location.href = 'phytext7.html';
    } 
    else if (searchValue === 'ท่ายืนย่อเข่า') {
      window.location.href = 'phytext8.html';
    } 
    else if (searchValue === 'ท่าย่อเข่า') {
      window.location.href = 'phytext8.html';
    } 
    else if (searchValue === 'ยืนย่อเข่า') {
      window.location.href = 'phytext8.html';
    } 
    else if (searchValue === 'นั้งทรงตัว') {
      window.location.href = 'phytext9.html';
    }
    else if (searchValue === 'การนั้งทรงตัว') {
      window.location.href = 'phytext9.html';
    } 
    else if (searchValue === 'ทรงตัว') {
      window.location.href = 'phytext9.html';
    } 
    else if (searchValue === 'นั้ง') {
      window.location.href = 'phytext9.html';
    } 
    else if (searchValue === 'การทรงตัว') {
      window.location.href = 'phytext9.html';
    } 
    else if (searchValue === 'ท่ายืนขาเดียว') {
      window.location.href = 'phytext10.html';
    } 
    else if (searchValue === 'ยืนขาเดียว') {
      window.location.href = 'phytext10.html';
    } 
    else if (searchValue === 'ขาเดียว') {
      window.location.href = 'phytext10.html';
    } 
    else if (searchValue === 'ท่าออกกำลังกาย') {
      window.location.href = 'physical.html';
    } 
 


    // Add more conditions here as needed
    // else if (searchValue === 'another-keyword') {
    //   window.location.href = 'another-page.html';
    // }
    
    // This is the default action if no keywords match
    else {
      alert('You searched for: ' + searchValue);
    }
  }

  searchButton.addEventListener('click', handleSearch);

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });
});