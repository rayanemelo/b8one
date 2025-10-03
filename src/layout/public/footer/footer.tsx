"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import {
  Mail,
  MapPin,
  Phone, Instagram,
  Facebook,
  Youtube,
  Linkedin
} from "lucide-react";
import { Logo } from "./components/logo";
import { FooterCol } from "./components/footer-col";
import { FooterLink } from "./components/footer-link";
import { FooterLine } from "./components/footer-line";
import { Social } from "./components/social";
import { Newsletter } from "./components/newsletter";

type FooterProps = React.HTMLAttributes<HTMLElement>;

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={twMerge(
        "border-t bg-white text-black",
        className
      )}
      {...props}
    >
      <Newsletter />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-black">
              Loja online de beleza com curadoria de maquiagem, skincare,
              cabelos e perfumaria. Qualidade, praticidade e ofertas exclusivas.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Social href="#" label="Instagram">
                <Instagram className="h-5 w-5 text-white" />
              </Social>
              <Social href="#" label="Facebook">
                <Facebook className="h-5 w-5 text-white" />
              </Social>
              <Social href="#" label="YouTube">
                <Youtube className="h-5 w-5 text-white" />
              </Social>
              <Social href="#" label="LinkedIn">
                <Linkedin className="h-5 w-5 text-white" />
              </Social>
            </div>
          </div>

          <FooterCol title="Navegação">
            <FooterLink href="/">Início</FooterLink>
            <FooterLink href="/collections/maquiagem">Maquiagem</FooterLink>
            <FooterLink href="/collections/skincare">Skincare</FooterLink>
            <FooterLink href="/collections/cabelos">Cabelos</FooterLink>
            <FooterLink href="/collections/perfumaria">Perfumaria</FooterLink>
            <FooterLink href="/offers">Ofertas</FooterLink>
            <FooterLink href="/about">Sobre</FooterLink>
          </FooterCol>

          <FooterCol title="Departamentos">
            <FooterLink href="/collections/batom">Batom</FooterLink>
            <FooterLink href="/collections/base">Base & Corretivo</FooterLink>
            <FooterLink href="/collections/olhos">Sombras & Máscaras</FooterLink>
            <FooterLink href="/collections/tratamento-facial">
              Tratamento Facial
            </FooterLink>
            <FooterLink href="/collections/shampoo-condicionador">
              Shampoo & Condicionador
            </FooterLink>
            <FooterLink href="/collections/acessorios">Acessórios</FooterLink>
          </FooterCol>

          <FooterCol title="Contato">
            <FooterLine icon={<Phone className="h-4 w-4" />}>
              (11) 99999-0000
            </FooterLine>
            <FooterLine icon={<Mail className="h-4 w-4" />}>
              contato@b8one.com.br
            </FooterLine>
            <FooterLine icon={<MapPin className="h-4 w-4" />}>
              Rua Exemplo, 123 — São Paulo/SP
            </FooterLine>
          </FooterCol>
        </div>
      </div>

      <div className="bg-gray-100 border-t-2 border-t-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-black sm:flex-row">
          <p>
            © {new Date().getFullYear()} b8one Store. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/terms"
              className="hover:text-zinc-300 transition-colors"
            >
              Termos
            </Link>
            <Link
              href="/contact"
              className="hover:text-zinc-300 transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}








