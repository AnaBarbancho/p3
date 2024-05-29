import * as fs from 'fs';
import prompt from 'prompt-sync';

const promptSync:any = prompt();

function carregarPalavras(arquivo: string): string[] {
    try {
        const data = fs.readFileSync(arquivo, 'utf8');
        return data.split(/\s+/);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        return [];
    }
}

function buscarPalavra(palavras: string[], palavra: string): number {
    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] === palavra) {
            return i;
        }
    }
    return -1;
}

function main() {
    const arquivo: string = promptSync("Digite o caminho do arquivo de texto: ");
    const palavras: string[] = carregarPalavras(arquivo);

    if (palavras.length === 0) {
        console.log("Arquivo vazio ou não encontrado.");
        return;
    }

    const palavraBusca: string = promptSync("Digite a palavra que deseja buscar: ");

    const indice: number = buscarPalavra(palavras, palavraBusca);

    if (indice !== -1) {
        console.log(`A palavra '${palavraBusca}' foi encontrada na posição ${indice}.`);
    } else {
        console.log("A palavra não foi encontrada.");
    }
}

main();
