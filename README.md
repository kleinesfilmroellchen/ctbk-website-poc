# Chaostreff Backnang Website

Dieses Repository enthält alle Dateien für die statische Webpräsenz des Chaostreff Backnang e.V.: <https://chaostreff-backnang.de>.

Technische Verantwortung für dieses Repository hat aktuell [kleines Filmröllchen](https://chaos.social/@fillmroellchen). Inhaltliche Verantwortung liegt beim Verein.

## Technisches

Es wird [zola](https://getzola.org) als Seitengenerator benutzt. Für Installationsanweisungen zu Zola siehe dort. Für eine lokale Entwicklungsinstanz inkl. Hot-Reloading einfach `zola serve` ausführen. Die fertig gebaute Seitenstruktur (`zola build`), die auch so öffentlich ausgeliefert wird, wird im `public`-Ordner erzeugt.

Der `content`-Ordner enthält den Markdown-Quelltext für die HTML-Seiten, die Startseite befindet sich in `_index.md`. Im `static`-Ordner befinden sich diverse statische Dateien.

Beachte, dass die offiziellen Vereinsdokumente nur temporär in diesem Repo untergebracht werden, bis wir einen CI-Workflow haben, der diese automatisch aus dem Quell-LaTeX baut.

`templates` enthält das HTML-Template für alle Seiten (`page.html`).

## Mitwirken

Wir nehmen in der Regel nur folgende Arten an Pull-Requests und Issues ohne Weiteres an:

- Barrierefreiheit
- Rechtschreibung und Grammatik
- Technische Korrekturen (Syntax, JavaScript-Bugfixes, CI-Updates)

Bitte jegliche Textdateien mit `prettier` formatieren.

Sollte es größere Änderungs- und Verbesserungswünsche geben, wird das im Vorhinein diskutiert und muss mindestens am Vorstand vorbei. Schau dafür eher auf unseren üblichen Kommunikationskanälen vorbei, anstatt hier ein Issue oder PR zu erstellen.

## Lizenzen

Die sonstigen Inhalte dieses Repos und der Website sind, soweit nicht anders angegeben, unter der [Creative Commons „Namensnennung“ 4.0](https://creativecommons.org/licenses/by/4.0/legalcode.de)-Lizenz verfügbar, siehe [LICENSE](./LICENSE). Jeglicher JavaScript-Quellcode ist unter der [MIT](https://mit-license.org/)-Lizenz verfügbar, siehe [LICENSE-CODE](./LICENSE-CODE).
