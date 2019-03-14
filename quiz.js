function get_answer_1(){
    var arr = [
        {title: "ENFJ",desc: "Berempati, pendengar yang baik, dan bertanggung jawab"},{title: "ENFP",desc: "Percaya diri dan mudah cari solusi"},{title: "ENTJ",desc: "Selalu punya rencana dan tujuan yang jelas"},{title: "ENTP",desc: "Cepat, berbakat, pendorong, siaga, and blak-blakan"},{title: "ESFJ",desc: "Bisa bekerja sama dengan baik, tepat waktu, serta teliti dan loyal"},{title: "ESFP",desc: "Ramah dan bersahabat, serta bisa beradaptasi dengan baik"},{title: "ESTJ",desc: "Realistis, tegas, detail, dan mengandalkan logika dalam mengambil keputusan"},{title: "ESTP",desc: "Fokus, spontan, suka berinteraksi dengan orang lain"},{title: "INFJ",desc: "Pendiam, misterius dan teguh"},{title: "INFP",desc: "Mudah beradaptasi, fleksibel, dan mudah menerima"},{title: "INTJ",desc: "Berimajinasi tinggi dan cara berpikir yang strategis"},{title: "INTP",desc: "Tenang, cerdas, fleksibel, dan mudah beradaptasi"},{title: "ISFJ",desc: "Pelindung, suka membela, dan perhatian"},{title: "ISFP",desc: "Fleksibel, kreatif, suka pengalaman baru"},{title: "ISTJ",desc: "Bisa diandalkan, dan selalu mengutamakan fakta"},{title: "ISTP",desc: "Cermat, teliti, dan suka melakukan analisis"}
    ];
    var qui1 = $('input[name=kuis_1]:checked', '#kuis').val();
    if(qui1 !== null){
        var title = '';
        var desc = '';
        if(arr[qui1]!==undefined){
            title = arr[qui1].title;
            desc = arr[qui1].desc;
        }
        $('#quiz1-title').html(title);
        $('#quiz1-desc').html(desc);
        $('#quiz1').modal('open');
    }
}
function get_answer_2(){
    var qui21 = $('input[name=kuis_2_1]:checked', '#kuis2').val();
    var qui22 = $('input[name=kuis_2_2]:checked', '#kuis2').val();
    var qui23 = $('input[name=kuis_2_3]:checked', '#kuis2').val();
    if(qui21 !== undefined && qui22 !== undefined && qui23 !== undefined){

        var title = '';
        var desc = '';
        var score = parseInt(qui21)+parseInt(qui22)+parseInt(qui23);
        if(score > 0 && score <= 40){
            title = '0 - 40';
            desc = 'Kamu harus lebih mencari tahu passion dari dalam dirimu. Gali terus apa yang pengin kamu lakukan. Kerja di bidang jurnalis bisa kamu lakukan, tinggal diasah kemampuan menulisnya ya!';
        }else if(score >= 50 && score <= 70){
            title = '50 - 70';
            desc = 'Aktif, enerjik. Kamu bisa coba pelajari passionmu di bidang olahraga atau komunikasi. Pekerjaan yang cocok buat kamu adalah jadi presenter hingga atlet!';
        }else if(score >= 80 && score <=120){
            title = '80 - 120';
            desc = 'bukan enggak percaya diri, tapi kayaknya kamu lebih suka dengan suasana yang lebih tenang. Literatur buku bisa lebih buat kamu dalamin nih. Bisa punya buku atau novel yang kamu tulis sendiri adalah impian kamu!';
        }
        // console.log(score);
        $('#quiz2-title').html(title);
        $('#quiz2-desc').html(desc);
        $('#quiz2').modal('open');
    }
}
function get_answer_3(){
    var qui31 = $('input[name=kuis_3_1]:checked', '#kuis3').val();
    var qui32 = $('input[name=kuis_3_2]:checked', '#kuis3').val();
    var qui33 = $('input[name=kuis_3_3]:checked', '#kuis3').val();
    var qui34 = $('input[name=kuis_3_4]:checked', '#kuis3').val();
    var qui35 = $('input[name=kuis_3_5]:checked', '#kuis3').val();
    if(qui31!==undefined && qui32!==undefined && qui33!==undefined && qui34!==undefined && qui35!==undefined){
        var arr = [qui31,qui32,qui33,qui34,qui35];
        var a = [];var b=[];var c=[];
        for(var i=0;i<=arr.length;i++){
            if(arr[i]=="a"){a.push(arr[i]);}
            if(arr[i]=="b"){b.push(arr[i]);}
            if(arr[i]=="c"){c.push(arr[i]);}
        }
        var title = '';
        var desc = '';
        if(a.length > b.length){
            if(a.length > c.length){
                title = 'Kulit Kering';
                desc = '<p>Menurut American Academy of Dermatology, kulit kering akan terasa kencang, kasar, dan sering mengelupas. Pembersih wajah tekstur <i>creamy</i> kayak <b>Marina Healthy & Glow Facial Foam</b> dengan kandungan <i>Bio Whitening Complex dan Mineral Essence</i> mampu membuat kulit tampak sehat, cerah dan lebih <i>glowing</i> .</p><p><b>Nah, kalau kulit wajah dan badan kamu kering, untuk body care bisa pakai lotion Marina Healthy & Glow agar kulit kita jadi lebih lembut.</b></p>';
            }else{
                title = 'Kulit Berminyak';
                desc = '<p>Kulit yang berminyak terlihat lebih mengkilap karena produksi sebum yang berlebih. Rawan banget timbul jerawat dan komedo. <b>Marina Skin Clear + Facial Foam</b> yang mengandung <i>Salicylic Acid dan Ocha Tea Extract</i> bisa melawan bakteri penyebab jerawat dan menangkal radikal bebas.</p><p><i>Body care</i> buat kulit yang berminyak cocok banget pakai <b>Marina Hydro Cool</b> yang cepat meresap ke kulit. Apalagi buat kamu yang suka beraktivitas di luar ruangan dan berhijab. Sensasi dinginnya bikin kulit jadi segar sepanjang hari!</p>';
            }
        }else{
            if(c.length > b.length){
                title = 'Kulit Berminyak';
                desc = '<p>Kulit yang berminyak terlihat lebih mengkilap karena produksi sebum yang berlebih. Rawan banget timbul jerawat dan komedo. <b>Marina Skin Clear + Facial Foam</b> yang mengandung <i>Salicylic Acid dan Ocha Tea Extract</i> bisa melawan bakteri penyebab jerawat dan menangkal radikal bebas.</p><p><i>Body care</i> buat kulit yang berminyak cocok banget pakai <b>Marina Hydro Cool</b> yang cepat meresap ke kulit. Apalagi buat kamu yang suka beraktivitas di luar ruangan dan berhijab. Sensasi dinginnya bikin kulit jadi segar sepanjang hari!</p>';
            }else{
                title = 'Kulit Normal';
                desc = '<p>Kulit yang normal terhidrasi dengan baik dan produksi sebumnya seimbang. <b>Marina Bright & Fresh Facial Foam</b> bakalan cocok buat kamu! </p><p>Untuk badan dengan kulit normal, <b>Marina E Collagen Asta</b> pas buat skin care kamu karena bisa bikin kulit kita jadi lebih kenyal dan terlihat sehat.</p>';
            }
        }
        $('#quiz3-title').html(title);
        $('#quiz3-desc').html(desc);
        $('#quiz3').modal('open');
    }
}
function get_answer_4(){
    var wajah = [{rambut:[{ src: 'TIPE-RAMBUT-01.jpg' },{ src: 'TIPE-RAMBUT-02.jpg' },{ src: 'TIPE-RAMBUT-03.jpg' },{ src: 'TIPE-RAMBUT-04.jpg' },{ src: 'TIPE-RAMBUT-05.jpg' },{ src: 'TIPE-RAMBUT-06.jpg' }]},{rambut:[{ src: 'TIPE-RAMBUT-07.jpg' },{ src: 'TIPE-RAMBUT-08.jpg' },{ src: 'TIPE-RAMBUT-09.jpg' },{ src: 'TIPE-RAMBUT-10.jpg' },{ src: 'TIPE-RAMBUT-11.jpg' },{ src: 'TIPE-RAMBUT-12.jpg' }]},{rambut:[{ src: 'TIPE-RAMBUT-13.jpg' },{ src: 'TIPE-RAMBUT-14.jpg' },{ src: 'TIPE-RAMBUT-15.jpg' },{ src: 'TIPE-RAMBUT-16.jpg' },{ src: 'TIPE-RAMBUT-17.jpg' },{ src: 'TIPE-RAMBUT-18.jpg' }]},{rambut:[{ src: 'TIPE-RAMBUT-19.jpg' },{ src: 'TIPE-RAMBUT-20.jpg' },{ src: 'TIPE-RAMBUT-21.jpg' },{ src: 'TIPE-RAMBUT-22.jpg' },{ src: 'TIPE-RAMBUT-23.jpg' },{ src: 'TIPE-RAMBUT-24.jpg' }]},{rambut:[{ src: 'TIPE-RAMBUT-25.jpg' },{ src: 'TIPE-RAMBUT-26.jpg' },{ src: 'TIPE-RAMBUT-27.jpg' },{ src: 'TIPE-RAMBUT-28.jpg' },{ src: 'TIPE-RAMBUT-29.jpg' },{ src: 'TIPE-RAMBUT-30.jpg' }]},{rambut:[{ src: 'TIPE-RAMBUT-31.jpg' },{ src: 'TIPE-RAMBUT-32.jpg' },{ src: 'TIPE-RAMBUT-33.jpg' },{ src: 'TIPE-RAMBUT-34.jpg' },{ src: 'TIPE-RAMBUT-35.jpg' },{ src: 'TIPE-RAMBUT-36.jpg' }]}];
    var wajah1 = $('input[name=kuis_4_1]:checked', '#kuis4').val();
    var rambut1 = $('input[name=kuis_4_2]:checked', '#kuis4').val();
    if(wajah1 !== undefined && rambut1 !== undefined){
        var img = '';
        if(wajah[wajah1].rambut[rambut1].src!==undefined){
            img = '<img src="assets/images/tiperambut/'+wajah[wajah1].rambut[rambut1].src+'" class="responsive-img" width="75%">';
        }
        console.log(img);
        // $('#quiz4').html(img);
        $('#quiz4-src').html(img);
        $('#quiz4').modal('open');
    }
}
function get_answer_5(){
    var qui51 = $('input[name=kuis_5_1]:checked', '#kuis5').val();
    var qui52 = $('input[name=kuis_5_2]:checked', '#kuis5').val();
    var qui53 = $('input[name=kuis_5_3]:checked', '#kuis5').val();
    var qui54 = $('input[name=kuis_5_4]:checked', '#kuis5').val();
    var qui55 = $('input[name=kuis_5_5]:checked', '#kuis5').val();
    if(qui51!==undefined && qui52!==undefined && qui53!==undefined && qui54!==undefined && qui55!==undefined){
        var arr = [qui51,qui52,qui53,qui54,qui55];
        var a = [];var b=[];var c=[];var d=[];
        for(var i=0;i<=arr.length;i++){
            if(arr[i]=="a"){a.push(arr[i]);}
            if(arr[i]=="b"){b.push(arr[i]);}
            if(arr[i]=="c"){c.push(arr[i]);}
            if(arr[i]=="d"){d.push(arr[i]);}
        }
        var title = '';
        var desc = '';
        if(a.length > b.length && a.length > c.length && a.length > d.length){
            desc = 'Selamat! Kamu adalah tipe cewek yang percaya diri dan nyaman dengan dirimu sendiri. Pacarmu juga bisa menerima kamu apa adanya! Hore!';
        }else if(b.length > a.length && b.length > c.length && b.length > d.length){
            desc = 'Walaupun ada kecenderungan pacarmu pengin mengubah dirimu, tapi kamu bisa menentukan pilihanmu sendiri dan pacar tetap mendukung, kok!';
        }else if(c.length > a.length && c.length > b.length && c.length > d.length){
            desc = 'Pacar enggak memaksa untuk berubah, tapi kamu jadi enggak percaya diri setiap kali dia ngomogin soal penampilanmu. Kalau enggak nyaman, boleh ditolak saja!';
        }else if(d.length > a.length && d.length > c.length && d.length > b.length){
            desc = 'Ups! pacarmu benar-benar pengin kamu berubah dalam banyak hal dan bikin kamu malah jadi enggak nyaman dengan diri sendiri.';
        }else{
            desc = 'Walaupun ada kecenderungan pacarmu pengin mengubah dirimu, tapi kamu bisa menentukan pilihanmu sendiri dan pacar tetap mendukung, kok!';
        }
        $('#quiz5-title').html(title);
        $('#quiz5-desc').html(desc);
        $('#quiz5').modal('open');
    }
}