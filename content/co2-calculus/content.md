# Calculus and CO2 Emissions

## Introduction
> section: intro
> id: intro

::: .theorem
This lesson allows students to perform polynomial differentiation and solve
tangent line problems using climate data such as atmospheric `CO_2`
concentrations data since 1950.
:::


::: .theorem
|    |    |
|:------------------|:-------------|
| __Grade Level__ 	| High School, undergraduate  |
| __Discipline__	| Mathematics |
| __Topic(s) in Discipline__	| Introductory calculus, differentiation, derivatives of polynomials, tangent line problem |
| __Climate Topic__ 	| Climate and the atmosphere, the greenhouse effect |
| __Location__		| Global|
| __Languages__ 		| English |
| __Approximate Time Required__	| 	120-130 min |

:::


[Polynomials](gloss:polynomial) are some of the simplest [functions](gloss:function) we use. We can compute [derivatives](gloss:derivative) of polynomials easily with some basic rules. Besides, many relations in the real world can be modeled as polynomial functions.

On this lesson we will first learn how to calculate derivatives of polynomials. Then, we will use a model of the concentration of `CO_2` in the atmosphere where it follows a polynomial function of the time. Using derivatives, we will study the predictions of this model for the future.


Some examples of polynomials:

::: column(width=320, align=center)

    x-coordinate-system(width=320 height=320 x-axis="-4|3|1")
{.caption} `1/3 x^3 + x^2 - 2x - 3`

::: column(width=320)

    x-coordinate-system(width=320 height=320 x-axis="-4|3|1")
{.caption} `x^2 + 2x - 2`

:::


---

## Reading
> section: reading
> id: reading

::: .theorem
__Reading (30 - 45 min)__

* Introduce the topic of differentiation. 
* Explain derivatives of polynomials with the help of the following text.
* Ask your students to solve the exercises at the end of the text.
:::

Recall that a _derivative_ of a function is the instantaneous rate of change of the value of the function as the variable changes. This can be written as 

![](/resources/co2-calculus/downloads/defeq04.gif)


We will see how this definition works for polynomial functions.

[Read this text](/resources/co2-calculus/downloads/WorldWebMath-Derivatives_of_Polynomials.pdf) and do the exercises at the end.


<font size="2">
__Credits__ : 
[Derivatives of polynomials](http://web.mit.edu/wwmath/calculus/differentiation/polynomials.html), from [World Wide Math](http://web.mit.edu/wwmath/index.html) at the Massachusetts Institute of Technology.
</font>

---

## Video Lesson
> section: video
> id: video

::: .theorem
__Video lesson (10 min)__

Play this micro-lecture from Khan Academy, to help students
further understand polynomial differentiation through examples and exercises.
:::

Watch this video about how to compute derivatives of polynomials.

    .video-wrap
      iframe(width="560" height="315" src="https://www.youtube.com/embed/mzOBlH32qdk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen)



<font size="2">
__Credits__ : 
[Polynomial derivatives](https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new/ab-2-6a/v/derivative-properties-and-polynomial-derivatives?v=mzOBlH32qdk) by Sal Khan, from [Khan Academy](https://www.khanacademy.org/).
</font>



---

## Classroom Activities
> section: activities
> id: activities

::: .theorem
__Classroom activity (60 min)__

Help your students apply the learned concepts through a classroom activity. This activity uses atmospheric `CO_2` data from the Mauna Loa Observatory for the period 1950 to 2017.

This activity will help students to
* observe the trend in increasing atmospheric `CO_2` levels.
* infer the approximate year when atmospheric `CO_2` levels could cause global
  temperatures to increase by 2°C (leading to serious climate change-related
  problems).
* determine the desired trends in atmospheric `CO_2` levels that could help in
  avoiding or mitigating such climate change-related consequences.

:::

::: .theorem

The material below comes from the project [Sustainability Math](http://sustainabilitymath.org/calculus-materials/), as "Mauna Loa Yearly Average `CO_2`", under Calculus I – Differentiation Related Projects.

*  Conduct the exercises 1-6 to predict atmospheric `CO_2` levels in the future.
  (Optional: exercises 7 and 8).
* Discuss the possible impact of these trends on global temperature and climate.
* You can find more resources on the same page, that you can use instead or along this activity.
* You can expand this activity to introduce the concept of curve fitting.

:::

::: column.grow
The [Mauna Loa Observatory](https://www.esrl.noaa.gov/gmd/obop/mlo/), in the Pacific islands of Hawaii (USA), is a research facility that monitors and collects data on the atmosphere since the 1950s.

Here we will use some data on the concentration of carbon dioxide (`CO_2`) on the atmosphere. The observatory records values of the concentration regularly for long periods of time (years), so we end up with a collection of points (time, concentration).

::: column(width=240)

    x-media.shift-1(src="images/Mauna-Loa-Observatory.jpg" width=240 height=160 credit="NOAA. Earth System Research Laboratory. Global Monitoring Division")

{.caption} Mauna Loa Observatory
:::


Using a technique called _curve fitting_, we can find the polynomial function that best describes the relation between the two variables, by passing the closest possible to all the points. 

Once we have a mathematical description of the physical measures, we can use mathematical tools (such as the derivatives) to analyze and extract information from the data.

Solve the exercises 1-6 on this sheet: [Exercises](/resources/co2-calculus/downloads/Mauna-Loa-CO2.docx).

<!-- * You will need this data: [Excel file](http://sustainabilitymath.org/excel/Mauna-Loa-CO2.xlsx) -->


<font size="2">
__Credits__ : 
[Mauna Loa Yearly Average `CO_2`](http://sustainabilitymath.org/calculus-materials/) by Thomas J. Pfaff, from [Sustainability Math](http://sustainabilitymath.org/) ([exercise](http://sustainabilitymath.org/word/Mauna-Loa-CO2.docx)).
</font>

---

## Questions and Assignments
> section: exercises
> id: exercises

::: .theorem
Propose the following questions to your students and help them to find some answers.
:::

Use the tools and the concepts learned so far to discuss and determine answers to the following questions:

1. Plot a graph and find the polynomial equation to model the average yearly
   atmospheric `CO_2` levels from 1950 to 2017 (using data records provided).
2. Compare and analyze the rate of change of atmospheric `CO_2` levels by applying
   polynomial differentiation.
3. Based on observed trends, what will the atmospheric `CO_2` level be in 2100?


---

## Resources and credits
> section: resources
> id: resources

::: .theorem
Encourage your students to check the original sources. If you or your students would like to explore the topic further, the additional resources below will be useful.
:::

### Credits

1. Reading, “Derivatives of Polynomials” 	[World Web Math, Massachusetts Institute of Technology](http://web.mit.edu/wwmath/index.html).
2. Micro-lecture (video), “Differentiating polynomials” 	[Khan Academy](https://www.khanacademy.org/).
3. Classroom/Laboratory Activity ,[Mauna Loa Yearly Average CO2](http://sustainabilitymath.org/calculus-materials/) by	 Thomas J. Pfaff, [Sustainability Math](http://sustainabilitymath.org/).

### Additional resources

1. Interactive visualization, [“Interactive Graph showing Differentiation of a Polynomial Function”](https://www.intmath.com/differentiation/derivative-graphs.php) from Interactive Mathematics.

 
<font size="2">
All the teaching tools and images  in our collated list are owned by the corresponding creators/authors/organizations as  listed on their websites. Please view the individual copyright and ownership details for each tool by following the individual links provided. We have selected and analyzed the tools that align with the overall objective of our project and have provided the corresponding links. We do not claim ownership of or responsibility/liability for any of the listed tools. 
</font>

