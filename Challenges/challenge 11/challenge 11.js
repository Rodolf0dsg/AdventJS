function getCompleted(part, total) {
    const formatTime = (time) =>{
      const [h, m, s] = time.split(':');
      return (Number(h) * 3600) + (Number(m) * 60) + Number(s)
    } 
    const partFormated = formatTime(part);
    const totalFormated = formatTime(total);
    let evalPart = partFormated;
    let evalTotal = totalFormated;
    while (evalTotal) {
          let tempPart = evalTotal
          evalTotal = evalPart % evalTotal
          evalPart = tempPart
      }
  
    return `${partFormated/evalPart}/${totalFormated/evalPart}`
  }
