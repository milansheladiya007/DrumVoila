document.addEventListener('keydown', function(e) {
    // A Trombone play
    if (e.keyCode == 65 || e.keyCode == 97) {
        if(document.getElementById('audio_65_A_97').paused)
        {
            document.getElementById('audio_65_A_97').play();
            console.log("Trombone start...")
        }
        else
        {
            document.getElementById('audio_65_A_97').pause();
            console.log("Trombone stop...")
        }
    }
    // S Saxophone
    else if (e.keyCode == 83 || e.keyCode == 115) {
        if(document.getElementById('audio_83_S_115').paused)
        {
            document.getElementById('audio_83_S_115').play();
            console.log("saxophone start...")
        }
        else
        {
            document.getElementById('audio_83_S_115').pause();
            console.log("saxophone stop...")
        }
    }
    // Trumpet
    else if (e.keyCode == 68 || e.keyCode == 100) {
        if(document.getElementById('audio_68_D_100').paused)
        {
            document.getElementById('audio_68_D_100').play();
            console.log("Trumpet start...")
        }
        else
        {
            document.getElementById('audio_68_D_100').pause();
            console.log("Trumpet stop...")
        }
    }
    // Piano
    else if (e.keyCode == 70 || e.keyCode == 102) {
        if(document.getElementById('audio_70_F_102').paused)
        {
            document.getElementById('audio_70_F_102').play();
            console.log("Piano start...")
        }
        else
        {
            document.getElementById('audio_70_F_102').pause();
            console.log("Piano stop...")
        }
    }
    //flute
    else if (e.keyCode == 71 || e.keyCode == 103) {
        if(document.getElementById('audio_71_G_103').paused)
        {
            document.getElementById('audio_71_G_103').play();
            console.log("flute start...")
        }
        else
        {
            document.getElementById('audio_71_G_103').pause();
            console.log("flute stop...")
        }
    }
    //DRUM
    else if (e.keyCode == 72 || e.keyCode == 104) {
        if(document.getElementById('audio_72_H_104').paused)
        {
            document.getElementById('audio_72_H_104').play();
            console.log("DRUM start...")
        }
        else
        {
            document.getElementById('audio_72_H_104').pause();
            console.log("DRUM stop...")
        }
    }
    //harmonica
    else if (e.keyCode == 74 || e.keyCode == 106) {
        if(document.getElementById('audio_74_J_106').paused)
        {
            document.getElementById('audio_74_J_106').play();
            console.log("harmonica start...")
        }
        else
        {
            document.getElementById('audio_74_J_106').pause();
            console.log("harmonica stop...")
        }
    }
    //Accordion
    else if (e.keyCode == 75 || e.keyCode == 107) {
        if(document.getElementById('audio_75_K_107').paused)
        {
            document.getElementById('audio_75_K_107').play();
            console.log("Accordion start...")
        }
        else
        {
            document.getElementById('audio_75_K_107').pause();
            console.log("Accordion stop...")
        }
    }
    //Accordion
    else if (e.keyCode == 76 || e.keyCode == 108) {
        if(document.getElementById('audio_76_L_108').paused)
        {
            document.getElementById('audio_76_L_108').play();
            console.log("bell start...")
        }
        else
        {
            document.getElementById('audio_76_L_108').pause();
            console.log("bell stop...")
        }
    }
    //guitar
    else if (e.keyCode == 81 || e.keyCode == 113)
    {
        if(document.getElementById('audio_81_Q_113').paused)
        {
            document.getElementById('audio_81_Q_113').play();
            console.log("guitar start...")
        }
        else
        {
            document.getElementById('audio_81_Q_113').pause();
            console.log("guitar stop...")
        }
    }
    //Conga
    else if (e.keyCode == 87 || e.keyCode == 119)
    {
        if(document.getElementById('audio_87_W_119').paused)
        {
            document.getElementById('audio_87_W_119').play();
            console.log("Conga start...")
        }
        else
        {
            document.getElementById('audio_87_W_119').pause();
            console.log("Conga stop...")
        }
    }
    //xylophone
    else if (e.keyCode == 69 || e.keyCode == 101)
    {
        if(document.getElementById('audio_69_E_101').paused)
        {
            document.getElementById('audio_69_E_101').play();
            console.log("xylophone start...")
        }
        else
        {
            document.getElementById('audio_69_E_101').pause();
            console.log("xylophone stop...")
        }
    }
    //snare_drum
    else if (e.keyCode == 80 || e.keyCode == 112)
    {
        if(document.getElementById('audio_80_P_112').paused)
        {
            document.getElementById('audio_80_P_112').play();
            console.log("snare_drum start...")
        }
        else
        {
            document.getElementById('audio_80_P_112').pause();
            console.log("snare_drum stop...")
        }
    }
    //MARACAS
    else if (e.keyCode == 80 || e.keyCode == 112)
    {
        if(document.getElementById('audio_79_O_111').paused)
        {
            document.getElementById('audio_79_O_111').play();
            console.log("MARACAS start...")
        }
        else
        {
            document.getElementById('audio_79_O_111').pause();
            console.log("MARACAS stop...")
        }
    }
    else if(e.keyCode == 77 || e.keyCode == 109)
    {
        StopAll();
        console.log("All Audio stopped")
    }
});


function StopAll(){
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
}