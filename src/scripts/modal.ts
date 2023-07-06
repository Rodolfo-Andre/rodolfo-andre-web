import type { Link, Project } from "@scripts/types";
import { Modal } from "bootstrap";
import { $d } from "@scripts/utils.ts";

const insertModal = (modalContentString: string) => {
  const $modalContent = new DOMParser().parseFromString(
    modalContentString,
    "text/html"
  ).body.firstElementChild;

  $d.body.appendChild($modalContent!);
};

const showModal = (idModal: string) => {
  const $modal = $d.getElementById(idModal),
    modalInstance = new Modal($modal!);

  modalInstance.show();

  addHiddenEventModal($modal!, modalInstance);
};

const addHiddenEventModal = ($modal: HTMLElement, modalInstance: Modal) => {
  $modal.addEventListener("hidden.bs.modal", () => {
    modalInstance.dispose();
    $modal.remove();
  });
};

const showModalCard = ({
  imageURL,
  nameProject,
  descriptionProject,
  repositoryURL,
  webSite,
}: Project) => {
  const modalContentString = `    
    <div
      class="modal modal-lg fade"
      id="modalProjectCard"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="modalProjectCard"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header border-0">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex flex-wrap gap-3 justify-content-center align-items-center pt-0">
            <div style="flex-grow: 1; text-align: center; ">
              <img
                src="${imageURL}"
                alt="project-image"
                style="max-width:300px; height:300px; object-fit: contain; width: 100%;"
              />
            </div>

            <div style="flex-grow: 1; max-width:450px;">
              <h3
                class="modal-title border-bottom border-4 border-secondary mb-3"
              >
                ${nameProject}
              </h3>

              <p style="text-align: justify;">${descriptionProject}</p>

              <div class="d-flex flex-wrap justify-content-between mb-3">
                <p class="text-secondary fw-bold m-0">Repositorio:</p>
                <a
                  class="text-decoration-none text-dark"
                  href=${repositoryURL.href}
                  target="_blank"
                  >${repositoryURL.name}</a
                >
              </div>

              ${
                webSite
                  ? `<div class="d-flex flex-wrap justify-content-between mb-3">
                          <p class="text-secondary fw-bold m-0">Sitio Web:</p>
                          <a class="text-decoration-none text-dark" href=${webSite.href} target="_blank">${webSite.name}</a>
                        </div>`
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  insertModal(modalContentString);
  showModal("modalProjectCard");
};

export { insertModal, showModal, showModalCard };
