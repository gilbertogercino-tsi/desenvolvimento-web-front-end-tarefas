export type TipoContato = 'Amigo(a)' | 'IFRN' | 'Trabalho' | 'Família' | 'Outro';

export class Contato {
  private nome: string;
  private telefone: string;
  private email: string;
  private aniversario: string;
  private tipo: TipoContato;

  constructor(nome: string, telefone: string, email: string, aniversario: string, tipo: TipoContato) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
    this.tipo = tipo;
  }

  getNome(): string { return this.nome; }
  getTelefone(): string { return this.telefone; }
  getEmail(): string { return this.email; }
  getAniversario(): string { return this.aniversario; }
  getTipo(): TipoContato { return this.tipo; }

  setNome(nome: string): void { this.nome = nome; }
  setTelefone(telefone: string): void { this.telefone = telefone; }
  setEmail(email: string): void { this.email = email; }
  setAniversario(aniversario: string): void { this.aniversario = aniversario; }
  setTipo(tipo: TipoContato): void { this.tipo = tipo; }
}
