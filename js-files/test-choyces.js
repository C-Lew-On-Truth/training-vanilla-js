           let mainHolder = document.querySelector(".main-holder")           
           let holder1 = document.querySelector('.holder-1')
           let holder2 = document.querySelector('.holder-2')

           holder1.onclick = () => {
                holder1.classList.remove("holder-1")
                holder1.classList.add("change-holder-1")
                holder2.classList.remove("holder-2")
                holder2.classList.add("kill-holder-2")

                setTimeout(() => {
                    holder2.style.display = "none"
                }, 500)
            
               console.log("seen")
           }

           holder2.onclick = () => {

            holder2.classList.remove("holder-2")
            holder2.classList.add("change-holder-2")
            holder1.classList.remove("holder-1")
            holder1.classList.add("kill-holder-1")
            setTimeout(() => {
                holder1.style.display = "none"
            }, 500)
            console.log(mainHolder)
        }


           