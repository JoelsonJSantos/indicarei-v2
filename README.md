# Indicarei v2

Nova versão da plataforma **Indicarei**, criada do zero com foco em experiência responsiva para desktop e mobile, busca de profissionais e serviços, perfis públicos, painel profissional e administração.

## Arquitetura

```text
GitHub
   ↓
Vercel
   ↓
Next.js

Supabase   → banco de dados e autenticação
Cloudinary → imagens e vídeos
Resend     → e-mails
Asaas      → pagamentos
```

As integrações serão implementadas depois da criação e validação visual das páginas.

## Stack inicial

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel

## Identidade visual

- Primária: `#168C7E`
- Primária escura: `#0F6F66`
- Acento: `#25B9A8`
- Fundo claro: `#F6F7F3`
- Fundo quente: `#F2EFE4`
- Fundo escuro: `#14222C`
- Superfície escura: `#1E2D38`

## Páginas iniciais

### Públicas

- `/` — página inicial
- `/buscar` — busca e filtros
- `/categorias` — listagem de categorias
- `/p/[slug]` — perfil público profissional
- `/entrar` — acesso à conta
- `/cadastrar` — escolha do tipo de cadastro
- `/cadastrar/cliente` — cadastro de cliente
- `/cadastrar/profissional` — cadastro profissional
- `/recuperar-senha` — recuperação de acesso
- `/sobre`, `/contato`, `/termos` e `/privacidade`

### Painel profissional

- `/painel`
- `/painel/perfil`
- `/painel/galeria`
- `/painel/plano`
- `/painel/configuracoes`

### Administração

- `/admin`
- `/admin/profissionais`
- `/admin/categorias`
- `/admin/configuracoes`

Nesta fase, as páginas usam informações fictícias e estruturas provisórias. Os dados reais serão adicionados por etapas.

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

## Implantação

O projeto será publicado pela Vercel, conectado diretamente a este repositório do GitHub.
