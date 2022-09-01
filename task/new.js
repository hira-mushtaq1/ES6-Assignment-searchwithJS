let mobile = {
  iphone: {
    iphone12: {
       phoneName: "iphone",
       modelNumber:"iphone12",
      ram: 8,
      storage: 1024,
      camera: 64,
      price: 302345,
    },
    iphone13: {
      phoneName: "iphone",
      modelNumber:"iphone13",
      ram: 16,
      storage: 1024,
      camera: 64,
      price: 300000,
    },
    iphone14: {
      phoneName: "iphone",
      modelNumber: "iphone14",
      ram: 32,
      storage: 1024,
      camera: 64,
      price: 441234,
    },
  },

  samsung: {
    a30: {
      phoneName: "samsung",
      modelNumber: "samsungA30",
      ram: 4,
      storage: 64,
      camera: 8,
      price: 22234,
    },
    note5: {
      phoneName: "samsung",
      modelNumber: "samsungNote5",
      ram: 2,
      storage: 32,
      camera: 8,
      price: 30234,
    },

    s10: {
      phoneName: "samsung",
      modelNumber:"samsungS10",
      ram: 7,
      storage: 128,
      camera: 48,
      price: 102498,
    },
  },
  techno: {
    camon18: {
      phoneName: "techno",
      modelNumber: "technoCamon18T",
      ram: 8,
      storage: 128,
      camera: 48,
      price: 32000,
    },
    camon17: {
      phoneName: "techno",
      modelNumber: "technoCamon17",
      ram: 6,
      storage: 64,
      camera: 48,
      price: 30000,
    },
    camon15: {
      phoneName: "techno",
      modelNumber: "technoCamon15",
      ram: 4,
      storage: 64,
      camera: 48,
      price: 28000,
    },
  },
};

// function searchFn(){
// let phoneName=document.getElementById('mobileName').value
// let modelName=document.getElementById('modelNAme').value
// console.log(mobile[phoneName][modelName])

// }

let mobileName = document.getElementById("mobileName");
let modelName = document.getElementById("modelName");

function fillKeys() {
  let mainKeys = Object.keys(mobile);
  for (var i = 0; i < mainKeys.length; i++) {
    mobileName.innerHTML += `<option value="${mainKeys[i]}">${mainKeys[i]}</option>`;
  }
}

fillKeys();

function fillNested() {
  modelName.disabled = false;
  let nestKeys = Object.keys(mobile[mobileName.value]);
  modelName.innerHTML = "";
  for (var i = 0; i < nestKeys.length; i++) {
    modelName.innerHTML += `<option value="${nestKeys[i]}">${nestKeys[i]}</option>`;
  }
  console.log(nestKeys);
}

function searchFn() {
  let data=document.getElementById('data')
  let showResult = mobile[mobileName.value][modelName.value];
  // let data=document.getElementById('data')
  // let myData = JSON.stringify(showResult);
  let keySpecs= Object.keys(showResult)
  let ValSpecs= Object.values(showResult)
  console.log(showResult)
  data.innerHTML="";
  for(var i=0; i<keySpecs.length;i++){
    data.innerHTML+=`<h5><span>${keySpecs[i]}</span>:${ValSpecs[i]}</h5>`

  }

}

//  let mobileName=document.getElementById('mobileName').value
//  let modelName=document.getElementById('modelNumber').value
//  let valueModel=document.getElementById('valueModel').value

// console.log(keys)
// console.log(values)
