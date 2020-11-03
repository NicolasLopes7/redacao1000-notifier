const fetch = require('node-fetch');

setInterval(async () => {
    fetch('https://services.redacaonota1000.com.br/api/v2/aluno/tarefas?size=2', {
        headers: {
            'Connection': 'keep-alive',
            'Accept': 'application/json, text/plain, */*',
            'DNT': '1',
            'Authorization': process.env.TOKEN,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
            'Origin': 'https://portal.redacaonota1000.com.br',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://portal.redacaonota1000.com.br/',
            'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
        }
    }).then(res => res.json())
        .then(data => data.data[0].pontuacao ? console.log(`A redação saiu! e você tirou: ${data.data[0].pontuacao}`) : console.log("A redação ainda não saiu!"));
}, 5000)

