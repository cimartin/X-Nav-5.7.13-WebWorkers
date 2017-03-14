function buscarPrimos() {
			var worker = new Worker("worker.js");
			var n = document.getElementById('formulario').input.value;
			var primeList = "";
			worker.postMessage(n);
			worker.onmessage = function(event) {
				primeList += event.data;
				document.getElementById('result').innerHTML = primeList;
				worker.terminate();
			}
		}