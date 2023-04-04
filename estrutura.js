 function paginar ( idPagina )  {
    const  elementoAtivo  =  document . querySelector ( ".item.active" ) ;
    elementoAtivo . classList . remover ( "ativo" ) ;
  
    const  novaPagina  =  documento . getElementById ( idPagina ) ;
    novaPagina . classList . adicionar ( "ativo" ) ;
  }
