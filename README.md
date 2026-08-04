# Indicarei v2

Nova versão da plataforma **Indicarei**, criada do zero com foco em experiência responsiva para desktop e mobile, divulgação e busca de profissionais e serviços, perfis públicos, painel profissional e administração.

## Direção do produto

O Indicarei é um portal de profissionais. Visitantes podem pesquisar, visualizar perfis e entrar em contato sem precisar criar uma conta.

O cadastro público é destinado aos profissionais que desejam divulgar seus serviços. Não haverá cadastro separado de cliente nesta fase.

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
- `/entrar` — acesso de profissionais e administradores
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
