#!/bin/sh
latexmk -pdfxe -xelatex -synctex=1 -interaction=nonstopmode -file-line-error -outdir=$2 $1
