const questions = [
    
    {
        question: "All of the following endoscopic findings are associated with the condition shown in I the image below except:",
        answers: [
        { text: "Aphthous ulcer", correct: false },
        { text: "Longitudinal ulcers", correct: false },
        { text: "Fine granular mucosa", correct: true },
        { text: "Stricture", correct: false },
        ],
        },
        {
        question: "What is the earliest radiographic feature of Crohn's disease?",
        answers: [
        { text: "Pseudo diverticula", correct: false },
        { text: "Rose-thorn appearance", correct: false },
        { text: "Aphthous", correct: true },
        { text: "String sign of Kantor", correct: false },
        ],
        },
        {
        question: "A 70-year-old chronic smoker presents with a history of intermittent crampy lower I abdominal pain and episodic diarrhea that has progressively worsened over the past 2 weeks. Examination revealed tenderness in the right iliac fossa and a positive guaiac test. What is the most likely diagnosis? ",
        answers: [
        { text: "Ulcerative colitis", correct: false },
        { text: "Diverticulitis", correct: false },
        { text: "Crohn's disease", correct: true },
        { text: "Irritable Bowel Syndrome", correct: false },
        ],
        },
        {
        question: "Which among the following findings is a feature of ulcerative colitis?",
        answers: [
        { text: "Granuloma", correct: false },
        { text: "Pseudo polyps", correct: true },
        { text: "Skip lesions", correct: false },
        { text: "Right colon predominance", correct: false },
        ],
        },
        {
        question: "The given image shows the colon of a patient with long-standing bloody diarrhea. I  What is the most possible diagnosis?  ",
        answers: [
        { text: "Ulcerative colitis", correct: true },
        { text: "Crohn's disease", correct: false },
        { text: "ischemic colitis", correct: false },
        { text: "Tropical spree", correct: false },
        ],
        },
        {
        question: "All of the following are true about ulcerative colitis except __ _",
        answers: [
        { text: "Continuous disease", correct: false },
        { text: "Rectal involvement is common", correct: false },
        { text: "ANCA positivity is common", correct: false },
        { text: "ASCA positivity is common", correct: true },
        ],
        },
        {
        question: "Which among the following is the earliest radiologic change seen on barium enema I in ulcerative colitis? ",
        answers: [
        { text: "Collar button ulcer", correct: false },
        { text: "Fine mucosal granularity", correct: true },
        { text: "String sign", correct: false },
        { text: "Stricture", correct: false },
        ],
        },
        {
        question: "All are true about the complications of the disease depicted colonoscopy image shown below  except",
        answers: [
        { text: "Hemorrhage", correct: false },
        { text: "Toxic mega colon", correct: false },
        { text: "Malignant change", correct: false },
        { text: "Fistula", correct: true },
        ],
        },
        {
        question: "A 30-year-old female patient presents with more than 8 episodes of bloody diarrhea. On examination, she is pale and febrile, with a pulse rate of 104 per minute. Laboratory investigation reveals an elevated ESR of 70mm. A colonoscopy reveals ulcerations and pseudo polyps. What is the most probable diagnosis? ",
        answers: [
        { text: "Cohn’s disease- moderate", correct: false },
        { text: "Cohn’s disease – mild", correct: false },
        { text: "Ulcerative colitis – moderate", correct: false },
        { text: "Ulcerative Colitis • severe", correct: true },
        ],
        },
        {
        question: "A 28-year-old male patient was brought to the casualty ward with a high fever and pain I abdomen for 2 days. He has had bloody diarrhea for the past several months. The abdominal radiograph of this patient is given below. What is the condition seen in the image?",
        answers: [
        { text: "Toxic megacolon", correct: true },
        { text: "Lntussuscepllon", correct: false },
        { text: "Sigmoid volvulus", correct: false },
        { text: "Pneumatics mtesbnalls", correct: false },
        ],
        },
        {
        question: "Which of the following infections can mimic the endoscopic appearance of severe I ulcerative colitis? ",
        answers: [
        { text: "Mycobacterium Valium", correct: false },
        { text: "Herpes simplex", correct: false },
        { text: "Campylobacter jejune", correct: true },
        { text: "Cytomegalovirus", correct: false },
        ],
        },
        {
        question: "Which of the following tests helps distinguish inflammatory bowel disease (lBO) from I  irritable bowel syndrome (IBS)? ",
        answers: [
        { text: "Fecal calprotectin", correct: true },
        { text: "Serum albumin", correct: false },
        { text: " C reactive protein", correct: false },
        { text: "Erythrocyte sedimentation rate", correct: false },
        ],
        },
        {
        question: "Which of the following is a marker of inflammatory bowel disease, which helps to rule  out irritable bowel syndrome?  ",
        answers: [
        { text: "Faecal fat", correct: false },
        { text: "Faecallactoferrin", correct: true },
        { text: "Faecal trypsin", correct: false },
        { text: "Faecal chymotrypsin", correct: false },
        ],
        },
        {
        question: "The diagnostic criteria for irritable b owe I syndrome in elude all of the fol lowing except",
        answers: [
        { text: "Abdominal pain related to defecation", correct: false },
        { text: "Persistent diarrhoea after a 48 hour fast", correct: true },
        { text: "Change in frequency of stool", correct: false },
        { text: "Change in form of stool", correct: false },
        ],
        },
        {
        question: "The most common pattern in irritable bowel syndrome (IBS) is __ _",
        answers: [
        { text: "Diarrhoea only", correct: false },
        { text: "Constipation only", correct: false },
        { text: "Prolonged constipation followed by diarrhoea", correct: false },
        { text: "Constipation alternating with episodes of diarrhea", correct: true },
        ],
        },
        {
        question: "Mr. Ramesh presented with a 3-week history of crampy abdominal pain associated Iwith diarrhoea. Which of the following features supports a diagnosis of irritable bowel syndrome?",
        answers: [
        { text: "Steatormea", correct: false },
        { text: "Nocturnal diarrtloea", correct: false },
        { text: "Persistent diarrrhoea after a 48 hour fast", correct: false },
        { text: "Onset of symptoms during a period of stress", correct: true },
        ],
        },
        {
        question: "Which of the following is not implicated in the pathogenesis of irritable bowel I syndrome?",
        answers: [
        { text: "Visceral hypersensitivity", correct: false },
        { text: "Activation of mid-cingulate cortex", correct: false },
        { text: "Increased serotonin", correct: false },
        { text: "Decreased colonic motor potentials", correct: true },
        ],
        },
        {
        question: "The neurotransmitter associated with irritable bowel syndrome diarrhea type (IBS-0) is-",
        answers: [
        { text: "Acetylcholine", correct: false },
        { text: "Neuropepllde Y", correct: false },
        { text: "Vasoact1ve intestinal peptide", correct: false },
        { text: "Serotonin", correct: true },
        ],
        },
        {
        question: "The part of the brain associated with irritable bowel syndrome are __ 1.Paracentral lobule 2.Mid cingulate cortex 3.Prefrontal lobe 4.Temporal cortex",
        answers: [
        { text: "1&2", correct: false },
        { text: "3&4", correct: false },
        { text: "2&4", correct: false },
        { text: "2&3", correct: true },
        ],
        },
        {
        question: "Which of the following is not a risk factor for post-infectious irritable bowel syndrome (IBS)?",
        answers: [
        { text: "Smoking", correct: false },
        { text: "Depression", correct: false },
        { text: "Male gender", correct: true },
        { text: "Toxicity of infecting bacterial strain", correct: false },
        ],
        },
        {
        question: "A 34-year-old woman presents with complaints of diarrhoea and crampy abdominal I pain since 8 months. The pain is relieved with bowel movements. You suspect irritable bowel syndrome. Which of the following investigations is recommended?",
        answers: [
        { text: "Complete blood count", correct: false },
        { text: "Sigmoidoscopy", correct: false },
        { text: "Stool examination for ova and parasites", correct: false },
        { text: "All of the above", correct: true },
        ],
        },
        {
        question: "All are true about FODMAP diet except __ _",
        answers: [
        { text: "It includes fermentable oligosaccharides", correct: false },
        { text: "Diet low in FODMAPs reduces symptoms in IBS patients.", correct: false },
        { text: "Sortlitol is an example of FODMAP", correct: false },
        { text: "FODMAPs are highly absorbed by the small intestine", correct: true },
        ],
        },
        {
        question: "A 35-year-old housewife with constipation-predominant irritable bowel syndrome presents with  worsening abdominal pain and bloating. Which of the following drugs can be prescribed to her?",
        answers: [
        { text: "Loperamide", correct: false },
        { text: "Lubiprostone", correct: true },
        { text: "Alosetron", correct: false },
        { text: "Cholestyramine resin", correct: false },
        ],
        },
        {
        question: "Paroxetine is most effective in reducing which symptom of irritable bowel syndrome (IBS)?",
        answers: [
        { text: "Diarrhea", correct: false },
        { text: "Constipation", correct: true },
        { text: "Abdominal pain", correct: false },
        { text: "Bloating", correct: false },
        ],
        },
        {
        question: "A 5 HT3 receptor antagonist used in the treatment of diarrhea predominant IBS (IBSD) is __  _",
        answers: [
        { text: "Alosetron", correct: true },
        { text: "Tegaserod", correct: false },
        { text: "Lubiprostone", correct: false },
        { text: "Linaclotide", correct: false },
        ],
        },
        {
        question: "lschaemic colitis is a side-effect of---",
        answers: [
        { text: "Lubiprostone", correct: false },
        { text: "Linaclotide", correct: false },
        { text: "Alosetron", correct: true },
        { text: "Tegaserod", correct: false },
        ],
        },
        {
        question: "Mrs Shruti, who suffers from irritable bowel syndrome asks you when is the best time to take antispasmodics for her postprandial abdominal pain. What would you suggest?",
        answers: [
        { text: "30 minutes before meals", correct: true },
        { text: "30 minutes after meals", correct: false },
        { text: "Along with meals", correct: false },
        { text: "1 hour after meals", correct: false },
        ],
        },
        {
        question: "The features of malabsorption syndrome include all except :",
        answers: [
        { text: "Anemia", correct: false },
        { text: "Tetany", correct: false },
        { text: "Constipation", correct: true },
        { text: "Abdominal pain", correct: false },
        ],
        },
        {
        question: "Which of the following is associated with steatorrhea?",
        answers: [
        { text: "Short bowel syndrome (SBS)", correct: true },
        { text: "Pernicious anemia", correct: false },
        { text: "Primary lactase deficiency", correct: false },
        { text: "Wilson's disease", correct: false },
        ],
        },
        {
        question: "A 22-year old man presents with diarrhea and intolerance to dairy products. On investigation,  he was found to have a lactase deficiency. Which of the following agents is least likely to cause symptoms of lactose  intolerance?",
        answers: [
        { text: "Condensed Milk", correct: false },
        { text: "Yoghurt", correct: false },
        { text: "Skimmed Milk", correct: true },
        { text: "Ice Cream", correct: false },
        ],
        },
        {
        question: "All are true about lactose intolerance except :",
        answers: [
        { text: "Lactase deficiency is seen in celiac disease", correct: false },
        { text: "Delayed gastric emptying decreases the symptoms", correct: false },
        { text: "It can mimic irritable bowel syndrome", correct: false },
        { text: "Rapid small-intestinal transit time decreases the symptoms", correct: true
        },
        ],
        },
        {
        question: "Which of the following will result in malabsorption?",
        answers: [
        { text: "Small bowel diverticulum", correct: true },
        { text: "Ulcerative colitis", correct: false },
        { text: "Anterior colon resection", correct: false },
        { text: "Sigmoid volvulus", correct: false },
        ],
        },
        {
        question: "Which of the following is not a feature of large bowel diarrhea?",
        answers: [
        { text: "Steatorrhea present", correct: true },
        { text: "Small volume", correct: false },
        { text: "Blood and mucus in stools", correct: false },
        { text: "Vomiting is infrequent", correct: false },
        ],
        },
        {
        question: "All are true regarding osmotic diarrhea except:",
        answers: [
        { text: "A Fasting tmproves the symptoms", correct: false },
        { text: "Increased osmolanty of stool is due unabsorbed dietary nutrients", correct: false },
        { text: "Stool osmolar gap >50 mOsm", correct: false },
        { text: "Are associated swith Enterotoxigenic E. colt", correct: true },
        ],
        },
        {
        question: "A 32-year-old woman presents with complaints of abdominal pain and recurrent diarrhoea  since one year. Stool osmolality was 200 mosmol/kg H20 and the stool osmolar gap was 20 mosmol/kg H20. What is  the most likely diagnosis?",
        answers: [
        { text: "Secretory diarmea", correct: false },
        { text: "Factitious diarrhea", correct: false },
        { text: "Osmotic diarrhea", correct: true },
        { text: "lnftammatory bowel disease", correct: false },
        ],
        },
        {
        question: "All are true regarding bile acid diarrhea except :",
        answers: [
        { text: "Seen in limited ileal disease", correct: false },
        { text: "Normal bile acid pool size", correct: false },
        { text: "No or mild steatorrhea", correct: false },
        { text: "Good response to low fat diet", correct: true },
        ],
        },
        {
        question: "The most common viral cause of diarrhea in adults is",
        answers: [
        { text: "Enterovirus", correct: false },
        { text: "Norovirus", correct: true },
        { text: "Rotavirus", correct: false },
        { text: "Hepatitis A virus", correct: false },
        ],
        },
        {
        question: "Which organism causes diarrhea with symptoms mimicking appendicitis?",
        answers: [
        { text: "Yersinia enterocolitica", correct: true },
        { text: "Shigella dysenteriae", correct: false },
        { text: "Campylobacter jejuni", correct: false },
        { text: "Salmonella enterica", correct: false },
        ],
        },
        {
        question: "All are associated with travellers' diarrhoea except:",
        answers: [
        { text: "Shigella", correct: false },
        { text: "Giardia", correct: false },
        { text: "Norovirus", correct: false },
        { text: "Enterovirus", correct: true },
        ],
        },
        {
        question: "Diarrhea due to Vibrio cholerae results in :",
        answers: [
        { text: "Hypokalemic acidosis", correct: true },
        { text: "Hyperkalemic acidosis", correct: false },
        { text: "Hypokalemic alkalosis", correct: false },
        { text: "Hyperkalemic alkalosis", correct: false },
        ],
        },
        {
        question: "Gastroenteritis is caused due to preformed toxins of which of the following organisms:",
        answers: [
        { text: "Vibrio cholerae", correct: false },
        { text: "Enterotoxigenic E. coli", correct: false },
        { text: "Salmonella enterocolitis", correct: false },
        { text: "Staphylococcus aureus", correct: true },
        ],
        },
        {
        question: "Which of the following tests is useful for the assessment of intestinal mucosa! function?",
        answers: [
        { text: "D-xylulose test", correct: false },
        { text: "D-xylose test", correct: true },
        { text: "Both A& B", correct: false },
        { text: "Schilling test", correct: false },
        ],
        },
        {
        question: "Which of the following conditions will have an abnormal D-xylose test?",
        answers: [
        { text: "Irritable bowel syndrome", correct: false },
        { text: "Ulcerative colitis", correct: false },
        { text: "Pancreatic insufficiency", correct: false },
        { text: "Short bowel syndrome", correct: true },
        ],
        },
        {
        question: "Which of the following is not a protein malabsorption disorder?",
        answers: [
        { text: "Enterokinase deficiency", correct: false },
        { text: "Hartnup syndrome", correct: false },
        { text: "Cystinuria", correct: false },
        { text: "Homocystinuria", correct: true },
        ],
        },
        {
        question: "A Schilling test was performed on a patient with vitamin 812 deficiency and the results are given below. What is the inference?",
        answers: [
        { text: "lleal disease", correct: true },
        { text: "Pernicious anemia", correct: false },
        { text: "Small intestinal bacterial overgrowth(SIBO) ", correct: false },
        { text: "Chronic pancreatitis", correct: false },
        ],
        },
        {
        question: "A patient presented with chronic diarrhoea and steatorrhoea. D-xylose test was  normal and the Schilling test was abnormal. A duodenal biopsy was normal. What is the most likely diagnosis?",
        answers: [
        { text: "Celiac disease", correct: false },
        { text: "Ulcerative colitis", correct: false },
        { text: "Intestinal lymphangiectasia", correct: false },
        { text: "Pancreatic insufficiency", correct: true },
        ],
        },
        {
        question: "A 15-year-old male patient presents with steatorrhea and ataxia. Acanthocytes were seen on the peripheral blood smear. The disease is thought to be because of abnormal chylomicron formation. Which of the following is the most likely diagnosis? ",
        answers: [
        { text: "Non-tropical sprue", correct: false },
        { text: "Abetalipoproteinemia", correct: true },
        { text: "Whipple's disease", correct: false },
        { text: "Tropical sprue", correct: false },
        ],
        },
        {
        question: "The findings associated with abetalipoproteinemia are",
        answers: [
        { text: "B", correct: false },
        { text: "B &C", correct: false },
        { text: "A & B", correct: true },
        { text: "C", correct: false },
        ],
        },
        {
        question: "A 15-year-old girl presented with fatigue, chronic diarrhoea, weight loss, bone pain, and abdominal distension. Investigations revealed iron deficiency anemia and osteoporosis. Which of the following is the single best test to be done for her evaluation? ",
        answers: [
        { text: "TSH levels", correct: false },
        { text: "C-peptide levels", correct: false },
        { text: "Urine sugar and ketone", correct: false },
        { text: "lgA tissue transglutaminase antibody", correct: true },
        ],
        },
        {
        question: "The single best screening test for celiac disease is __",
        answers: [
        { text: "Tissue transglutaminase Ab", correct: true },
        { text: "Anti Endomysial Ab", correct: false },
        { text: "Anti Gliadin Ab", correct: false },
        { text: "Biopsy", correct: false },
        ],
        },
        {
        question: "All are true about the types of celiac disease except:",
        answers: [
        { text: "A", correct: false },
        { text: "B", correct: true },
        { text: "C", correct: false },
        { text: "D", correct: false },
        ],
        },
        {
        question: "Suman, a 46-year-old lady with celiac disease is recommended a gluten-free diet. Which among the following grains can she consume? ",
        answers: [
        { text: "wheat", correct: false },
        { text: "Bartey", correct: false },
        { text: "Rye", correct: false },
        { text: "Rice", correct: true },
        ],
        },
        {
        question: "The most common extraintestinal manifestation of celiac disease is :",
        answers: [
        { text: "Dermatitis herpetiformis", correct: true },
        { text: "Diabetes mellitus type 1", correct: false },
        { text: "Bird fanciers lung", correct: false },
        { text: "Down syndrome", correct: false },
        ],
        },
        {
        question: "Which of the following is not a complication of celiac disease?",
        answers: [
        { text: "Intestinal lymphoma", correct: false },
        { text: "Intestinal ulcers", correct: false },
        { text: "Pancreatic insufficiency", correct: true },
        { text: "Collagenous sprue", correct: false },
        ],
        },
        {
        question: "When is refractory celiac disease diagnosed?",
        answers: [
        { text: "No remission of disease despite gluten free diet", correct: true },
        { text: "Intestinal ulcers on biopsy", correct: false },
        { text: "No response to steroids", correct: false },
        { text: "Development of lgA deficiency", correct: false },
        ],
        },
        {
        question: "Match the following : 1. Celiac disease 1. Proximal > Distal small intestine 2. Whipple's disease 11 .. Proximal small intestine 3. Tropical sprue. iii . Pan intestine ",
        answers: [
        { text: "1 ·ii , 2·i , 3·iii", correct: true },
        { text: "1-iii, 2-ii , 3-i", correct: false },
        { text: "1-i , 2-iii . 3-ii", correct: false },
        { text: "1-ii, 2-iii. 3-i", correct: false },
        ],
        },
        {
        question: "All are true about Whipple's disease except:",
        answers: [
        { text: "Caused by gram positive organism Tropneryma whipplei", correct: false },
        { text: "Culture of organism from biopsy specimen helps in early diagnosis", correct:
        true },
        { text: "Males affected more than females", correct: false },
        { text: "Multiple systems are affected", correct: false },
        ],
        },
        {
        question: "Periodic acid Schiff positive macrophages are seen in:",
        answers: [
        { text: "Agammaglobulinemia", correct: false },
        { text: "Whipple's disease", correct: true },
        { text: "Aoetailpoproteinemia", correct: false },
        { text: "crohn’s disease", correct: false },
        ],
        },
        {
        question: "The most common CNS manifestation associated with Whipple's disease is",
        answers: [
        { text: "Progressive dementia", correct: true },
        { text: "Supranuclear ophthalmoplegia", correct: false },
        { text: "Opsoclonus myoclonus syndrome", correct: false },
        { text: "Oculomasticatory myorrhythmia", correct: false },
        ],
        },
        {
        question: "The most common type of cardiovascular presentation in Whipple's disease is",
        answers: [
        { text: "Endocarditis", correct: true },
        { text: "Pericarditis", correct: false },
        { text: "Myocarditis", correct: false },
        { text: "Pericardial effusion", correct: false },
        ],
        },
        {
        question: "Which of the following drug is used in the maintenance phase of treatment of Whipple's disease?",
        answers: [
        { text: "Penincillin G", correct: false },
        { text: "Ceftriaxone", correct: false },
        { text: "Meropenem", correct: false },
        { text: "Trimethoprim I Sulfamethoxazole", correct: true },
        ],
        },
        {
        question: "A 42-year-old man presented with diarrhoea, floating stools and weight loss since 3 months. Celiac serology is negative. On biopsy of the small intestine mucosa; villous atrophy, crypt hyperplasia with normal mucosal thickness was seen. His symptoms improved with folic acid intake. What is the most likely diagnosis? ",
        answers: [
        { text: "Celiac disease", correct: false },
        { text: "Whipple's disease", correct: false },
        { text: "Tropical sprue", correct: true },
        { text: "Intestinal lymphoma", correct: false },
        ],
        },
        {
        question: "The treatment of tropical sprue is __ _",
        answers: [
        { text: "Tertacycline + Vitamin B12", correct: false },
        { text: "Metronidazole + Folic acid", correct: false },
        { text: "Amoxicillin + Vitamin B12", correct: false },
        { text: "Tetracycline+ Folic acid", correct: true },
        ],
        },
        {
        question: "The most common cause of short bowel syndrome in adults is",
        answers: [
        { text: "Crohn's disease", correct: false },
        { text: "Mesenteric vascular occlusion", correct: true },
        { text: "Necrotizing enterocolitis", correct: false },
        { text: "Small intestinal perforation", correct: false },
        ],
        },
        {
        question: "Which of the following drug is used for the management of small intestinal  bacterial overgrowth (SIBO) is :",
        answers: [
        { text: "Ciprofloxacin", correct: false },
        { text: "Azithromycin", correct: false },
        { text: "Rifaximin", correct: true },
        { text: "Streptomycin", correct: false },
        ],
        },
        {
        question: "A 46-year-old male patient is found to have hypoproteinemia, hypochlorhydria, and large rugal  folds in the proximal part of the stomach.  What is the most likely diagnosis?  ",
        answers: [
        { text: "Zollinger Ellison syndrome", correct: false },
        { text: "Gastric antral vascular ectasia", correct: false },
        { text: "Menetrier's disease", correct: true },
        { text: "Dieulafoy's lesion", correct: false },
        ],
        },
        {
        question: "Menetrier's disease in children occurs commonly due to the infection of",
        answers: [
        { text: "Cytomegalovirus", correct: true },
        { text: "Helicobacter pylori", correct: false },
        { text: "Herpes simplex virus", correct: false },
        { text: "Epstein Barr virus", correct: false },
        ],
        },
        {
        question: "Menetrier's disease occurs due to the overexpression of",
        answers: [
        { text: "TNF-o", correct: false },
        { text: "TGF·a", correct: true },
        { text: "TNF-β", correct: false },
        { text: "TGF-β", correct: false },
        ],
        },
        {
        question: "In a patient with Menetrier's disease, which of the following is least likely to occur?",
        answers: [
        { text: "Protein losing gastropathy", correct: false },
        { text: "Hypochlorhydria", correct: false },
        { text: "Weight loss", correct: false },
        { text: "Hematemesis", correct: true },
        ],
        },
        {
        question: "The part of the stomach that is usually spared in Menetrier's disease is",
        answers: [
        { text: "Body", correct: false },
        { text: "Fundus", correct: false },
        { text: "Antrum", correct: true },
        { text: "Greater curvature", correct: false },
        ],
        },
        {
        question: "Menetrier's disease is confirmed by",
        answers: [
        { text: "Endoscopic full thickness biopsy", correct: true },
        { text: "Surgical biopsy", correct: false },
        { text: "Endoscopic pinch biopsy", correct: false },
        { text: "Barium studies", correct: false },
        ],
        },
        {
        question: "An upper GI endoscopy is performed in a patient with dyspeptic symptoms. It shows the  presence of thickened gastric folds. All of the following can be a differential diagnosis in this patient except:",
        answers: [
        { text: "Zollinger-Ellison syndrome", correct: false },
        { text: "Lymphoma", correct: false },
        { text: "Menetrier's disease", correct: false },
        { text: "Pancreatic rests", correct: true },
        ],
        },
        {
        question: "A middle-aged man presented to the hospital with diarrhea and pedal edema. After a detaile  evaluation, he was found to have Menetrier's disease. Which of the following will be the first line of  treatment in this condition?",
        answers: [
        { text: "Partial gastrectomy", correct: false },
        { text: "Lansoprazole", correct: false },
        { text: "Cetuximab", correct: true },
        { text: "Octreolide", correct: false },
        ],
        },
        {
        question: "The most common site for mucosa-associated lymphoid tissue (MALT) lymphoma is",
        answers: [
        { text: "Esophagus", correct: false },
        { text: "Stomach", correct: true },
        { text: "Small intestine", correct: false },
        { text: "Large intestine", correct: false },
        ],
        },
        {
        question: "All are true about maltoma except",
        answers: [
        { text: "Majority of the cases are due to H.Pylori", correct: false },
        { text: "There is presence of chronic gastritis", correct: false },
        { text: "Commonly diagnosed at 60 years", correct: false },
        { text: "Arises from T lymphocytes", correct: true },
        ],
        },
        {
        question: "The most common cytogenetic abnormality seen in MALT lymphomas is",
        answers: [
        { text: "t(11 :18)", correct: true },
        { text: "t(1114)", correct: false },
        { text: "t(814)", correct: false },
        { text: "t(1418)", correct: false },
        ],
        },
        {
        question: "A 62-year-old woman underwent an endoscopic biopsy for the presence of a tumor in the stomach. The biopsy shows dense lymphocytic infiltration with lymphoepitheliallesions in the gastric glands. Which of the following investigations will be helpful in confirming the diagnosis? ",
        answers: [
        { text: "Cytogenetic testing", correct: false },
        { text: "lmmunophenotyping", correct: true },
        { text: "PET scan", correct: false },
        { text: "Contrast enhanced CT scan", correct: false },
        ],
        },
        {
        question: "An elderly woman was found to have a tumor in the stomach during the endoscopy. The biopsy  was taken from the tumor and it revealed the presence of lymphoma. lmmunophenotype shows that the cells are  positive for CD19, CD20, and negative for CDS and CD10.  What is the most likely diagnosis?  ",
        answers: [
        { text: "Mantle cell lymphoma", correct: false },
        { text: "Diffuse large B cell lymphoma", correct: false },
        { text: "MAL Toma", correct: true },
        { text: "Follicular lymphoma", correct: false },
        ],
        },
        {
        question: "An elderly male patient is diagnosed with MAL Toma limited to the mucosa of the stomach.  Which of the following will be the preferred method of treatment in this patient?",
        answers: [
        { text: "Rituximab", correct: false },
        { text: "Radiotherapy", correct: false },
        { text: "H.pylori eradication", correct: true },
        { text: "Surgical excision with negative margins", correct: false },
        ],
        },
        {
        question: "A 65-year-old woman presents with postprandial abdominal pain and diarrhea for the past 1  year. She has a previous history of myocardial infarction. On examination, her BMI is 16Kg/sq. m and bruit is heard  in the epigastrium.  What is the most probable diagnosis?  ",
        answers: [
        { text: "Acute mesenteric ischemia", correct: false },
        { text: "Chronic mesenteric ischemia", correct: true },
        { text: "Crohn's disease", correct: false },
        { text: "Irritable bowel syndrome", correct: false },
        ],
        },
        {
        question: "Which of the following is an epithelial mucosa! defense mechanism of the gastric I mucosa?",
        answers: [
        { text: "Layer of mucous", correct: false },
        { text: "Alkaline tide", correct: false },
        { text: "Microvascular bed", correct: false },
        { text: "Restitution", correct: true },
        ],
        },
        {
        question: "The use of NSAIDs impairs the gastric mucosal defense mechanism primarily by:",
        answers: [
        { text: "Irritant effect on gastric mucosa", correct: false },
        { text: "Stimulating acid production", correct: false },
        { text: "Inhibiting prostaglandin synthesis", correct: true },
        { text: "Inhibiting nitric oxide synthesis", correct: false },
        ],
        },
        {
        question: "All of the following are true about the risk factors of NSAIDs associated peptic ulcer I disease  except:",
        answers: [
        { text: "Smoking increases the risk", correct: false },
        { text: "H pylori infection increases the risk", correct: false },
        { text: "No dose of NSAID is completely safe", correct: false },
        { text: "Concomitant use of glucocorticoids decreases the risk", correct: true },
        ],
        },
        {
        question: "A patient presents with long-standing complaints of burning pain and discomfort in I the   epigastrium. On endoscopy and biopsy, he is found to have a duodenal ulcer and H pylori infection. Which pattern of   gastritis is likely to be seen in this patient?",
        answers: [
        { text: "Autoimmune gastritis", correct: false },
        { text: "Non-atrophic pangastritis", correct: false },
        { text: "Corpus predominant gastritis", correct: false },
        { text: "Antral predominant gastritis", correct: true },
        ],
        },
        {
        question: "A patient presents with frequent epigastric pain with burning sensation for the past 2 I years  The pain usually occurs 2-3 hours after a meal and is relieved by taking food. He also says that he sometimes wakes  up at night because of severe pain. The most probable cause for his symptoms is:",
        answers: [
        { text: "Gastric Ulcer", correct: false },
        { text: "Duodenal ulcer", correct: true },
        { text: "Perforated gastric ulcer", correct: false },
        { text: "Penetrating duodenal ulcer", correct: false },
        ],
        },
        {
        question: "Which of the following is true about gastric ulcers?",
        answers: [
        { text: "Usually occur in 4th decade", correct: false },
        { text: "Rarely malignant", correct: false },
        { text: "Low basal acid production", correct: true },
        { text: "High stimulated acid production", correct: false },
        ],
        },
        {
        question: "A patient presents with frequent burning sensation and discomfort in the epigastrium. I H  pylori eradication therapy should be offered if the patient is:",
        answers: [
        { text: "Taking PPls for more than one year", correct: false },
        { text: "Has rheumatoid artnritis", correct: false },
        { text: "A heavy smoker", correct: false },
        { text: "All of the above", correct: true },
        ],
        },
        {
        question: "A patient with peptic ulcer disease needs H. pylori eradication therapy. All of the following  drugs can be used except:",
        answers: [
        { text: "Bismuth subsalicylate", correct: false },
        { text: "Erythromycin", correct: true },
        { text: "Amoxicillin", correct: false },
        { text: "Metronidazole", correct: false },
        ],
        },
        {
        question: "Eradication of H pylori infection is determined by:",
        answers: [
        { text: "ELISA", correct: false },
        { text: "Urea breath test", correct: true },
        { text: "Biopsy urease test", correct: false },
        { text: "Culture", correct: false },
        ],
        },
        {
        question: "H pylori causes gastric mucosal injury due to the presence of:",
        answers: [
        { text: "CagA", correct: false },
        { text: "VacA", correct: true },
        { text: "LPS", correct: false },
        { text: "All the above", correct: false },
        ],
        },
        {
        question: "The most common complication of peptic ulcer disease is:",
        answers: [
        { text: "Perforation", correct: false },
        { text: "GI bleeding", correct: true },
        { text: "Gastric outlet obstruction", correct: false },
        { text: "Gastric carcinoma", correct: false },
        ],
        },
        {
        question: "A patient with PUD presented with hypercalcemia, hyperphosphatemia, and renal I insufficiency. Which among the following is the causative agent?",
        answers: [
        { text: "Aluminium hydroxide", correct: false },
        { text: "Magnesium hydroxide", correct: false },
        { text: "Calcium carbonate", correct: true },
        { text: "Proton pump inhibitors", correct: false },
        ],
        },
        {
        question: "A patient is adlmitted to the ICU after he suffered trauma to his head. The gastric I ulcers seen  in this patient are:",
        answers: [
        { text: "Curling ulcers", correct: false },
        { text: "Cushing ulcers", correct: true },
        { text: "Stress ulcers", correct: false },
        { text: "Refractory ulcers", correct: false },
        ],
        },
        {
        question: "A gastric ulcer is said to be refractory if it fails to heal after:",
        answers: [
        { text: "12 weeks", correct: true },
        { text: "8 weeks", correct: false },
        { text: "10weeks", correct: false },
        { text: "16 weeks", correct: false },
        ],
        },
        {
        question: "A middle-aged woman presents with acidity, abdominal pain, diarrhea, and weight I loss for the past few months. Her symptoms are not relieved by taking antacids. An endoscopic evaluation shows ulcers on the second part of the duodenum. Which of the following conditions should be suspected in this patient?",
        answers: [
        { text: "Chronic NSAI Ds use", correct: false },
        { text: "H. pylori infection", correct: false },
        { text: "Malignanl duodenal ulcer", correct: false },
        { text: "Zollinger Ellison syndrome", correct: true },
        ],
        },
        {
        question: "A patient with peptic ulcer disease presents with recurrent ulcers that do not respond well to medical therapy. Which among the following is the next appropriate step?",
        answers: [
        { text: "urea breath test", correct: false },
        { text: "Secretin test", correct: false },
        { text: "Serum gastrin levels", correct: true },
        { text: "Endoscopic ultrasound", correct: false },
        ],
        },
        {
        question: "The most sensitive and specific gastrin provocative test for the diagnosis of gastrinoma is:",
        answers: [
        { text: "Calcium infusion study", correct: false },
        { text: "Secretin study", correct: true },
        { text: "Bombesin test", correct: false },
        { text: "Protein meal test", correct: false },
        ],
        },
        {
        question: "Which of the following investigations employs somatostatin analogues to detect I  gastrinomas?",
        answers: [
        { text: "CECT", correct: false },
        { text: "PET/CTwitn Ga-DOTAT", correct: false },
        { text: "Octreo Scan", correct: true },
        { text: "Endoscopy", correct: false },
        ],
        },
        {
        question: "Viral cause of gastritis in immunocompromised patients is _",
        answers: [
        { text: "Cytomegalovirus (CMV)", correct: true },
        { text: "Hepatitis A", correct: false },
        { text: "Enterovirus", correct: false },
        { text: "CoxsacKie virus", correct: false },
        ],
        },
        {
        question: "Pernicious anemia is seen in:",
        answers: [
        { text: "Zollinger Ellison syndrome", correct: false },
        { text: "VIPoma", correct: false },
        { text: "Type A gastritis", correct: true },
        { text: "Type B gastritis", correct: false },
        ],
        },
        {
        question: "Phlegmonous gastritis occurs due to __ _",
        answers: [
        { text: "H.pylori", correct: false },
        { text: "E.coli", correct: true },
        { text: "Cytomegalovirus", correct: false },
        { text: "Herpes simplex virus", correct: false },
        ],
        },
        {
        question: "H.pylori is protective against __ ",
        answers: [
        { text: "Gastroesophageal reflux disease (GERO)", correct: false },
        { text: "Barrett's esophagus", correct: false },
        { text: "Adenocarcinoma of esophagus", correct: false },
        { text: "All the above", correct: true },
        ],
        },
        {
        question: "Cushing's ulcers are seen in",
        answers: [
        { text: "Burns", correct: false },
        { text: "Stress", correct: false },
        { text: "Head injury", correct: true },
        { text: "Cell necrosis", correct: false },
        ],
        },
        {
        question: "Which among the following hepatitis viruses is a DNA virus?",
        answers: [
        { text: "Hepatitis A", correct: false },
        { text: "Hepatitis B", correct: true },
        { text: "Hepatitis c", correct: false },
        { text: "Hepatitis D", correct: false },
        ],
        },
        {
        question: "A pregnant woman comes to your clinic for a routine first-trimester prenatal check-up. I Laboratory workup reveals that she is HBsAg positive and HBeAg positive. What is the chance of vertical transmission of hepatitis B to the child?",
        answers: [
        { text: "More than 25 %", correct: false },
        { text: "More than 30 %", correct: false },
        { text: "More than 60 %", correct: false },
        { text: "More than 90 %", correct: true },
        ],
        },
        {
        question: "Which of the following is the most common route of spread of hepatitis E virus?",
        answers: [
        { text: "Sexual transmission", correct: false },
        { text: "Blood transfusion", correct: false },
        { text: "Feco-oral", correct: true },
        { text: "IV Drug use", correct: false },
        ],
        },
        {
        question: "Infection with hepatitis E virus has the highest fatality rate in which of the following  populations?",
        answers: [
        { text: "Pregnant women", correct: true },
        { text: "Infants", correct: false },
        { text: "Malnourished", correct: false },
        { text: "Adolescents", correct: false },
        ],
        },
        {
        question: "Acute viral hepatitis with highest risk of leading to fulminant hepatitis is",
        answers: [
        { text: "Hepatitis A", correct: false },
        { text: "Hepatitis B", correct: false },
        { text: "Hepatitis E", correct: false },
        { text: "Hepatitis D", correct: true },
        ],
        },
        {
        question: "An intern has a needle-prick injury while establishing an IV line on a patient in the casualty.  The patient was subsequently found to be HBsAg positive. If the intern were to get infected with hepatitis B, what is the first marker to rise in an acute infection?",
        answers: [
        { text: "Anti HBs", correct: false },
        { text: "HBsAg", correct: true },
        { text: "HBeAg", correct: false },
        { text: "Anti HBc", correct: false },
        ],
        },
        {
        question: "An intern has a needle-prick injury while establishing an IV line on a patient in the casualty.  The patient was subsequently found to be HBsAg positive. If the intern were to get infected with hepatitis B, the  presence of which of the following markers would best diagnose early acute hepatitis B virus infection?",
        answers: [
        { text: "lgM anti HBsAg", correct: false },
        { text: "lgM anti HBcAg", correct: true },
        { text: "lgG anti HBeAg", correct: false },
        { text: "HBsAg", correct: false },
        ],
        },
        {
        question: "A 35-year-old male comes to the OPD with suspected acute viral hepatitis. All of the following  should be included during the preliminary evaluation of the patient except:",
        answers: [
        { text: "HBsAg", correct: false },
        { text: "lgM anti HBC", correct: false },
        { text: "Anti HCV", correct: false },
        { text: "lgM anti HBe", correct: true },
        ],
        },
        {
        question: "The diagnosis of acute hepatitis B in the window period (serological gap) can be made by the  detection of which of the following serological markers?",
        answers: [
        { text: "Anti HBs", correct: false },
        { text: "HBsAg", correct: false },
        { text: "HBeAg", correct: false },
        { text: "Anti HBc", correct: true },
        ],
        },
        {
        question: "A male patient is found to be HBsAg positive with HBeAg negative. HBV DNA copies are 50000  IU/ml, while AST and ALT are elevated to 6 times the upper limit of normal. What is the likely diagnosis?",
        answers: [
        { text: "HBV surface mutant", correct: false },
        { text: "HBV precore mutant", correct: true },
        { text: "Wild HbsAg", correct: false },
        { text: "Inactive HBV carrier", correct: false },
        ],
        },
        {
        question: "The lab reports of a 40-year-old man show positive lgG Anti-HBc and negative HBsAg. What is  the most likely diagnosis?",
        answers: [
        { text: "Recovering from hepatitis B", correct: false },
        { text: "Hepatitis B in the remote past", correct: true },
        { text: "Immunization with HBsAg", correct: false },
        { text: "Both B&C", correct: false },
        ],
        },
        {
        question: "A patient with acute hepatitis B has recovered from the infection. Identify the serological  marker marked in the image:",
        answers: [
        { text: "Anti-Hbc Ab", correct: true },
        { text: "Anti-Hbs Ab", correct: false },
        { text: "Anti-Hbe Ab", correct: false },
        { text: "HbsAg", correct: false },
        ],
        },
        {
        question: "A medical student is given the full schedule of hepatitis B vaccination. Which of the following  can be used to determine efficacy of hepatitis B vaccination in the student?",
        answers: [
        { text: "HBsAg", correct: false },
        { text: "lgM Anti HBc", correct: false },
        { text: "lgG Anti HBc", correct: false },
        { text: "Anti-HBsAg", correct: true },
        ],
        },
        {
        question: "Hepatitis D superinfection and coinfection may be differentiated using which of the I following  markers?",
        answers: [
        { text: "lgM anti-HDV", correct: false },
        { text: "lgM anti-HBC", correct: true },
        { text: "HBVDNA", correct: false },
        { text: "HBsAg", correct: false },
        ],
        },
        {
        question: "A male patient presents with complaints of yellowish discoloration of the sclera, loss of appetite,  and weight loss for the past several months. A full laboratory workup was followed by a liver biopsy. Findings of the  liver biopsy are shown in the given image. What is the most likely diagnosis?",
        answers: [
        { text: "Acute hepatitis A", correct: false },
        { text: "Chronic hepatitis B", correct: true },
        { text: "Chronic hepatitis C", correct: false },
        { text: "Chronic hepatitis E", correct: false },
        ],
        },
        {
        question: "Which of the following pairs regarding hepatitis B is not correctly matched?",
        answers: [
        { text: "Acute Viral hepatitis B - Supportive care", correct: false },
        { text: "Acute Viral hepatitis B -Antiviral therapy", correct: true },
        { text: "Chronic Viral hepatitis B - Supportive care", correct: false },
        { text: "Chronic Viral hepatitis B - Antiviral therapy", correct: false },
        ],
        },
        {
        question: "Which of the following is an indication to treat chronic hepatitis B infection?",
        answers: [
        { text: "lgG Anti HbC antibody", correct: false },
        { text: "HbeAg negative", correct: false },
        { text: "Alanine aminotransferase (ALT)> 2 upper limit of normal", correct: true },
        { text: "Viral DNA less than 2000 copies", correct: false },
        ],
        },
        {
        question: "A patient with chronic hepatitis B infection was found to be HBsAg positive and HBeAg  negative. The liver enzymes were found to be within the normal limit. What is the most appropriate next step in the  management of this patient?",
        answers: [
        { text: "IFN", correct: false },
        { text: "Lamivudine and IFN", correct: false },
        { text: "Adefovir", correct: false },
        { text: "Serial monitoring", correct: true },
        ],
        },
        {
        question: "Which of the following is recommended as first-line therapy for chronic hepatitis B?",
        answers: [
        { text: "Pegylated interferon", correct: false },
        { text: "Telbivudine", correct: false },
        { text: "Lamivudine", correct: false },
        { text: "Entecavir", correct: true },
        ],
        },
        {
        question: "Which of the following pathologies is not characteristically associated with Hepatitis c Virus  infection?",
        answers: [
        { text: "Mixed cryoglobulinemia", correct: false },
        { text: "Lichen planus", correct: false },
        { text: "Porphyria cutanea tarda", correct: false },
        { text: "Polyarteritis Nodosa", correct: true },
        ],
        },
        {
        question: "A 35-year-old man who presented with weight loss and abdominal discomfort has I been  diagnosed with chronic hepatitis C. All the following factors are determinants of liver disease progression in this  patient except",
        answers: [
        { text: "Age", correct: false },
        { text: "Duration of infection", correct: false },
        { text: "HCV RNA level", correct: true },
        { text: "Body mass index", correct: false },
        ],
        },
        {
        question: "For which of the following populations is Hepatitis C virus (HCV) screening not recommended?",
        answers: [
        { text: "Persons with HIV infection", correct: false },
        { text: "Persons with unexplained elevation of aminotransferase levels", correct: false },
        { text: "Persons who have undergone long-term haemodialysis", correct: false },
        { text: "Household contacts of persons With Hepatitis c", correct: true },
        ],
        },
        {
        question: "All are Nonstructural protein SA (NS5A) inhibitors used in the treatment of hepatitis C except",
        answers: [
        { text: "Sofosbuvir", correct: true },
        { text: "Daclatasvir", correct: false },
        { text: "Ledipasvir", correct: false },
        { text: "Velpatasvir", correct: false },
        ],
        },
        {
        question: "What is the preferred regimen for the treatment of HCV?",
        answers: [
        { text: "Velpatasvir and sofosbuvir", correct: true },
        { text: "Ribavirin and lamivudine", correct: false },
        { text: "Telaprevir and simeprevir", correct: false },
        { text: "Boceprevir and simeprevir", correct: false },
        ],
        },
        {
        question: "Surveillance for Hepatocellular Carcinoma (HCC) in patients with HBV infection is not  recommended in which of the following populations?",
        answers: [
        { text: "Asian male HBV carriers under age 40", correct: true },
        { text: "Asian female HBV carriers over age 50", correct: false },
        { text: "HBV carriers with a family history of HCC", correct: false },
        { text: "Patients with high serum levels of HBV DNA and ongoing liver injury", correct: false
        },
        ],
        },
        {
        question: "A 40-year-old male, chronic smoker, presents to the AllMS OPD with fever, fatigue, I yellow colored urine and clay-colored stools. For the past few days, he had developed an aversion to cigarette smoking. On examination scleral icterus was present. What investigations would you advise to rule out acute viral hepatitis? Liver function test results are given below Total Bilirubin - 18.5 Direct Bilirubin - 7.5 SGOT - 723 SGPT - 812",
        answers: [
        { text: "HBsAg, lgM antiHBC, AntiHCV, AntiHEV", correct: false },
        { text: "AntiHAV, HBsAg, lgM antiHBc, AntiHCV", correct: true },
        { text: "HBsAg, lgM antiHBc, AntiHDV, AntiHCV, Anti HEV", correct: false },
        { text: "AntiHAV, lgM antiHBc, AntiHCV, AntiHEV", correct: false },
        ],
        },
        
      
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();