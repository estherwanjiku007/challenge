//function to calculate the netsalary
function calcNetSalary(basicSalary){
    //function to calculate the Payee
    function calcPayee(basicSalary){
        let payee;
        if(basicSalary<=2400){
            console.log(payee=basicSalary*0.1);
        }
        else if(basicSalary>24000 && basicSalary<=32,333){
            console.log(payee=basicSalary*0.25);
        }
        else if(basicSalary>=32334 && basicSalary<=500000){
            console.log(payee=basicSalary*0.3);
        }
        else if(basicSalary>500000 && basicSalary<=800000){
            console.log(payee=basicSalary*0.325);
        }
        else {
            console.log(payee=basicSalary*0.35);
        }
        calcPayee(100000)
    }
    //function to calculate the nhif deduction
        function calcNhifDed(basicSalary){
        let nhifDed;
        if(basicSalary<=5999){
            console.log(nhifDed=150);
        }else if(basicSalary>5999 && basicSalary<=7999){
            console.log(nhifDed=300);
        }
        else if(basicSalary>=8000 && basicSalary<=11999){
            console.log(nhifDed=400);
        }
        else if(basicSalary>=12000 && basicSalary<=14999){
            console.log(nhifDed=500);
        }
        else if(basicSalary>=15000 && basicSalary<=19999){
            console.log(nhifDed=600);
        }
        else if(basicSalary>=20000 && basicSalary<=24999){
            console.log(nhifDed=750);
        }
        else if(basicSalary>=25000 && basicSalary<=29999){
            console.log(nhifDed=850);
        }
        else if(basicSalary>=30000 && basicSalary<=34999){
            console.log(nhifDed=900);
        }
        else if(basicSalary>=35000 && basicSalary<=3999){
            console.log(nhifDed=950);
        }
        else if(basicSalary>=40000 && basiSalary<=44999){
            console.log(nhifDed=1000);
        }
        else if(basicSalary>=45000 && basicSalary<=49999){
            console.log(nhifDed=1100)
        }
        else if(basicSalary>=50000 && basicSalary<=59999){
            console.log(nhifDed=1200)
        }
        else if(basicSalary>=60000 && basicSalary<=69999){
            console.log(nhifDed=1300)
        }
        else if(basicSalary>=70000 && basicSalary<=79999){
            console.log(nhifDed=1400);
        }
        else if(basicSalary>=80000 && basicSalary<=89999){
            console.log(nhifDed=1500)
        }
        else if(basicSalary>=90000 && basicSalary<=99999){
            console.log(nhifDed=1600);
        }
        else{
            console.log(nhifDed=1700);
        }
        calcNhifDed(100000)
    }
    //functuion to calculate the nssf deduction
    function calcNssfDed(pensionScheme,maxPensionablePay){
        
        if (pensionScheme>1){
            console.log(tier===2)
        }
        else{
            console.log(tier===1);
        }
        if(tier===1){
            console.log(maxPensionablePay<=6000)
            }
            else{
                console.log(maxPensionablePay>6000 && maxPensionablePay<=18000)
            let maxContributions=maxPensionablePay*0.06
            }
            calcNssfDed(2,16000)
        }
        //function to calculate the Fringe benefit
        function calcFringeBenefit(month,loans){
            if(month===January||February||March){
                console.log(interest=0.08*loans)
           }
            else if(month===April||May ||June){
                console.log(interest=0.097*loans)
    }
            else if(mmonth===July||August||September){
                console.log(interest=0.10*basicSalary)
            }
           else {
                console.log(interest=0.12*loans)
            }
            calcFringeBenefit(December,10000,)
            function calcHousingFund(basicSalary){
                let housingLevy=basicSalary*0.015
               console.log(housingLevy)
            }
            calcHousingFund(100000)
        
         let deductions=interest+nhifDed+payee+maxContributions+housingLevy;
         let netSalary=basicSalary-deductions;
         console.log(netSalary);
    }
    }
        calcNetSalary(100000)