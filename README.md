# Caesar-cipher-cli
### Для корректной работы приложения необходимы:

- Git - [Download Git](https://git-scm.com/downloads)
- Node.js - [Download Node.js](https://nodejs.org/en/download/)
## Установка приложения
* Склонировать репозиторий:
```
git clone https://github.com/stdmnstar/NodeJS-Caesar-cipher-cli.git
```

* Перейти в склонированную папку:
```
cd NodeJS-Caesar-cipher-cli
```

* Переключиться на ветку develop:
```
git checkout develop
```

* Установить все зависимости:
```
npm install
```

* Перейти в папку приложения:
```
cd caesar
```
## Использование

### Запуск приложения - `node index <options>`

### Опции запуска:

* **-s, --shift** - целое число. Сдвиг в шифровании. Обязательный параметр
* **-a, --action** - направление шифрования. Может принимать значения **encode/decode**. Обязательный Параметр
* **-i, --input** - путь/имя файла с выходными данными. Если данный параметр не задан, то данные беруться из входного потока stdin
* **-o, --output** - путь/имя файла с входными данными. Если данный параметр не задан, то данные выводятся в выходной поток stdout

Для завершения работы приложения в режиме работы с stdin необходимо нажать **ctrl + c**

### Примеры использования:
```
node index -a encode -s 7
```
```
node index -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```
node index --action decode --shift 7 --input encoded.txt --output plain.txt
```

```
node index --action encode --shift -7 --input plain.txt --output encoded.txt
```
