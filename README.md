# Indicarei v2

Nova versão da plataforma **Indicarei**, criada do zero com foco em experiência mobile, busca de profissionais e serviços, perfis públicos, painel do profissional e administração.

## Stack inicial

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Docker
- Google Cloud Run

## Identidade visual

- Primária: `#168C7E`
- Primária escura: `#0F6F66`
- Acento: `#25B9A8`
- Fundo claro: `#F6F7F3`
- Fundo quente: `#F2EFE4`
- Fundo escuro: `#14222C`
- Superfície escura: `#1E2D38`

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validação

```bash
npm run typecheck
npm run lint
npm run build
```

## Docker

```bash
docker build -t indicarei-v2 .
docker run --rm -p 8080:8080 -e PORT=8080 indicarei-v2
```

## Cloud Run

O projeto usa `output: "standalone"` no Next.js e está preparado para execução em contêiner no Google Cloud Run.
