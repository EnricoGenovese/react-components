# React Blog Components

## Esercizio
Prendendo ispirazione dal layout fornito in allegato (*scrennshot.png*), creare la pagina iniziale di un blog con un post inserito al suo interno. Assicuratevi di suddividere il layout in componenti appropriati.

## Step per creare il progetto:
1. Creiamo un progetto React utilizzando vite:
```bash
npm create vite@latest .
```
2. Installiamo le dipendenze:
```bash
npm npm install
```
3.Lanciamo il server di sviluppo
```bash
npm run dev
```
4. Creiamo una cartella components nella quale inseriremo i nostri componenti:
    from *this.project-name*/src:
```bash
mkdir components
```    

## BONUS:
1. Invece di utilizzare un unico file index.css separiamo lo style utilizzando i CSS Modules
2. Creiamo un array di posts e usiamo le props per popolare le card con i dati giusti (ogni card il suo oggetto post)