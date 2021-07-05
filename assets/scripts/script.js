var id = 9;
function vietbai() {
  let vietbai_tieude = $(".vietbai_tieude").val();
  let vietbai_noidung = $(".vietbai_noidung").val();
  let vietbai_linkanh = $(".vietbai_linkanh").val();
  let vietbai_chuyenmuc = $(".vietbai_chuyenmuc").val();

  let vietbai_chen = `
  <div class="bai ${id}">
    <div class="nut">
      <button class="suabai"onclick ="suabai(${id})" >Sửa bài</button>
      <button class="xoabai"onclick ="xoabai(${id})" >Xóa bài</button>
    </div>
    <div class="img">
      <img src="${vietbai_linkanh}" class="linkanh_bai ${id}">
    </div>
    <div class="noidung">
      <p class="tieude_bai ${id}">${vietbai_tieude}</p>
      <p class="chuyenmuc_bai ${id}">${vietbai_chuyenmuc}</p>
      <p class="noidung_bai ${id}">${vietbai_noidung}</p>
    </div>
  </div>
  `;

  id++;
  $("body").append(vietbai_chen);
  $(".vietbai_tieude").val("");
  $(".vietbai_noidung").val("");
  $(".vietbai_linkanh").val("");
  $(".vietbai_chuyenmuc").val("");

  $(".modal-create-bg").attr("class", "modal-create-bg");
}

function xoabai(i) {
  $("." + i).remove();
}

function suabai(i) {
  let vietbai_tieude = $(".tieude_bai" + "." + i).text();
  let vietbai_noidung = $(".noidung_bai" + "." + i).text();
  let vietbai_linkanh = $(".linkanh_bai" + "." + i).attr("src");
  let vietbai_chuyenmuc = $(".chuyenmuc_bai" + "." + i).text();

  $(".modal-edit-bg").attr(
    "class",
    "modal-edit-bg" + " " + "modal-active" + " " + i
  );

  $(".suabai_tieude").val(vietbai_tieude);
  $(".suabai_noidung").val(vietbai_noidung);
  $(".suabai_linkanh").val(vietbai_linkanh);
  $(".suabai_chuyenmuc").val(vietbai_chuyenmuc);
}

function capnhat() {
  let id = $(".modal-edit-bg").attr("class").split(" ");
  id = id[id.length - 1];
  let suabai_tieude = $(".suabai_tieude").val();
  let suabai_noidung = $(".suabai_noidung").val();
  let suabai_linkanh = $(".suabai_linkanh").val();
  let suabai_chuyenmuc = $(".suabai_chuyenmuc").val();

  let suabai_chen = `
  <div class="bai ${id}">
    <div class="nut">
      <button class="suabai"onclick ="suabai(${id})" >Sửa bài</button>
      <button class="xoabai"onclick ="xoabai(${id})" >Xóa bài</button>
    </div>
    <div class="img">
      <img src="${suabai_linkanh}" class="linkanh_bai ${id}">
    </div>
    <div class="noidung">
      <p class="tieude_bai ${id}">${suabai_tieude}</p>
      <p class="chuyenmuc_bai ${id}">${suabai_chuyenmuc}</p>
      <p class="noidung_bai ${id}">${suabai_noidung}</p>
    </div>
  </div>
  `;

  $(".bai" + "." + id).replaceWith(suabai_chen);
  $(".modal-edit-bg").attr("class", "modal-edit-bg");
}

function thembai() {
  $(".modal-create-bg").attr("class", "modal-create-bg" + " " + "modal-active");
}
