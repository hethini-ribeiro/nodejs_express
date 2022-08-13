const pegaArquivo = require('../index');
const arrayResultados = [{
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
}]

describe('pegaArquivo::', () => {
    it('Deve ser uma função',()=> {
        expect(typeof pegaArquivo).toBe('function');
    })

    it('Deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('./test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResultados)
    })

    it('Deve retornar a mensagem "não há links"',async ()=>{
        const resultado = await pegaArquivo('./test/arquivos/texto1_semlink.md')
        expect(resultado).toBe('Não há links');
    })

    it('Deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('./test/arquivos/')).rejects.toThrow('Não há arquivo no caminho')
    })

    it('Deve resolver a função com sucesso', async () => {
        await expect(pegaArquivo('./test/arquivos/texto1.md')).resolves.toEqual(arrayResultados)
    })
})